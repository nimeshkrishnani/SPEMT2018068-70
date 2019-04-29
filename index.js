const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var bodyParser = require("body-parser");
var cors = require('cors');
var mysql      = require('mysql');
var md5 = require('md5');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./config/secret');
var connection = mysql.createConnection({
  host     : '34.73.175.209',
  user     : 'root',
  password : 'NIme&1212',
  database : 'event_information'
});
connection.connect(); 
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
	//res.send('Hello World!')
	connection.query('SELECT * FROM `generalEventInfo`', function (error, results, fields) {
	  if (error) throw error;
	  
    res.status(200).send({ msg: 'successfull',  data:results});
	  
	});
})

app.post('/eventFetch', function (req, res) {
   	
	connection.query('SELECT * FROM `generalEventInfo`', function (error, results, fields) {
	  if (error) throw error;
	  
    res.status(200).send({ msg: 'successfull',  data:results});
	  
	}); 
})

app.post('/subEventFetch', function (req, res) {
   	
	connection.query('SELECT * FROM `subEventInfo` WHERE `eventId`="'+req.body.name+'"', function (error, results, fields) {
	  if (error) throw error;
	  if(results.length==1)
	  {
	  	connection.query('SELECT * FROM `generalEventInfo` WHERE `eventName`="'+req.body.name+'"', function (error2, results2, fields2) {
	  	if (error2) throw error2;
	  	res.status(200).send({ msg: 'successfull',  data:results,name:results2[0]['eventName']});
	});
	    
	  }
	  else if(results.length==0)
	  {
	  	res.status(200).send({ msg: 'unsuccessfull',  data:results});
	  }
	  
	}); 
})


app.post('/authenticatelogin', function (req, res) {
   	
	connection.query('SELECT * FROM `members` WHERE `password`="'+md5(req.body.password)+'" and `username`="'+req.body.username+'" and `active`=1', function (error, results, fields) {
	  if (error) throw error;
	  if(results.length==1)
	  {
	  	var token = jwt.sign({ id:results[0]['id_mem'] }, config.secret, {
	      expiresIn: 86400 // expires in 24 hours
	    });
	    res.status(200).send({ auth: true, token: token, msg:'logged in successfully'});
	  }
	  else if(results.length==0)
	  {
	  	res.status(200).send({ auth: false, msg: 'Credentials are not valid' });
	  }
	  
	}); 
})


app.get('/getusers', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	id=decoded.id;
    	connection.query('SELECT * FROM `list_members` WHERE `fk_mem`="'+id+'" and `active`=1', function (error, results, fields) {
		  if (error) throw error;
		  if(results.length>0)
		  {
		    res.status(200).send({ auth: true, count:results.length, data:results});
		  }
		  else
		  {
		  	res.status(200).send({ auth: true, count:results.length ,data:results});
		  }
		  
		});
    }
    
    
	})

})

app.get('/verifytoken', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
	    if (err)
	    {
	    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
	    }
	    else
	    {
	    	id=decoded.id;
			res.status(200).send({ auth: true, id:id});
		}
    })

})

app.post('/createusers', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	id=decoded.id;
    	connection.query('INSERT INTO `list_members`(`fname`, `mname`, `lname`, `email`, `description`, `fk_mem`) VALUES ("'+req.body.fname+'","'+req.body.mname+'","'+req.body.lname+'","'+req.body.email+'","'+req.body.description+'","'+id+'") ON DUPLICATE KEY UPDATE `fname`="'+req.body.fname+'",`mname`="'+req.body.mname+'",`lname`="'+req.body.lname+'",`description`="'+req.body.description+'",`fk_mem`="'+id+'"', function (error, results, fields) {
		  if (error) throw error;
		
		  if(results.affectedRows)
		  {
		  	res.status(200).send({ auth: true, msg:"Operation successfull, redirecting to list"});
		  }
		  else
		  {
		  	res.status(200).send({ auth: false, msg:"Cannot create user ,some error occurred"});
		  }
		  
		});
    }
    
    
	})

})


app.post('/updateusers', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	id=decoded.id;
    	connection.query('INSERT INTO `list_members`(`id_ls_mem`,`fname`, `mname`, `lname`, `email`, `description`, `fk_mem`) VALUES ("'+req.body.id_ls_mem+'","'+req.body.fname+'","'+req.body.mname+'","'+req.body.lname+'","'+req.body.email+'","'+req.body.description+'","'+id+'") ON DUPLICATE KEY UPDATE `fname`="'+req.body.fname+'",`mname`="'+req.body.mname+'",`lname`="'+req.body.lname+'",`email`="'+req.body.email+'",`description`="'+req.body.description+'",`fk_mem`="'+id+'"', function (error, results, fields) {
		  if (error) throw error;
		
		  if(results.affectedRows)
		  {
		  	res.status(200).send({ auth: true, msg:"Operation successfull, redirecting to list"});
		  }
		  else
		  {
		  	res.status(200).send({ auth: false, msg:"Cannot create user ,some error occurred"});
		  }
		  
		});
    }
    
    
	})

})

app.get('/getUser/:id_ls_mem', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	
    	id=decoded.id;
    	connection.query('SELECT * from `list_members` WHERE `id_ls_mem`="'+req.params.id_ls_mem+'" AND `fk_mem`="'+id+'"', function (error, results, fields) {
		  if (error) throw error;
		
		  if(results.length)
		  {
		  	res.status(200).send({ auth: true, msg:"Operation successfull, redirecting to list",data:results[0]});
		  }
		  else
		  {
		  	res.status(200).send({ auth: false, msg:"Cannot create user ,some error occurred"});
		  }
		  
		});
    }
    
    
	})

})

app.get('/deleteuser/:id_ls_mem', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	
    	id=decoded.id;
    	connection.query('UPDATE `list_members` SET `active`=0 WHERE `id_ls_mem`="'+req.params.id_ls_mem+'" and `fk_mem`="'+id+'"', function (error, results, fields) {
		  if (error) throw error;
		
		  if(results.affectedRows)
		  {
		  	  connection.query('SELECT * FROM `list_members` WHERE `fk_mem`="'+id+'" and `active`=1', function (error, results, fields) {
			  if (error) throw error;
			  if(results.length>0)
			  {
			    res.status(200).send({ auth: true, count:results.length, data:results});
			  }
			  else
			  {
			  	res.status(200).send({ auth: true, count:results.length ,data:results});
			  }
			  
			});
		  }
		  else
		  {
		  	res.status(200).send({ auth: false, msg:"Cannot delete user ,some error occurred"});
		  }
		  
		});
    }
    
    
	})

})

app.post('/createikigai', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	id=decoded.id;
    	if(req.body.setid==undefined)
    	{
          connection.query('INSERT INTO `ikigaiSet`(`createdBy`) VALUES ("'+id+'")', function (error, results, fields) {
		  if (error) throw error;
		  if(results.affectedRows)
		  {
		  	let setid=results.insertId;
		  	let str='';
		  	req.body.response.map((currElement, index) => {
		  	if(currElement!=''){
				str+='("'+currElement+'","'+req.body.type+'","'+setid+'")';
				if(index!=req.params.length)
				{
					str+=',';
				}
			}	
			});
			console.log('INSERT INTO `ikigaiResponse`(`response`, `type`, `idSet`) VALUES '+removeLastComma(str)+'');
		  	connection.query('INSERT INTO `ikigaiResponse`(`response`, `type`, `idSet`) VALUES '+removeLastComma(str)+'', function (error, results, fields) {
		  		if (error) throw error;
		  		if(results.affectedRows)
		  		{
		  			res.status(200).send({ auth: true, msg:"Operation successfull, redirecting to list",id:setid});
		  		}
		  		else
		  		{
		  			res.status(200).send({ auth: false, msg:"Cannot create ,some error occurred"});
		  		}
		  	})
		  	
		  }
		  else
		  {
		  	
		  }
		  
		});	
    	}
    	else
    	{
    	 	connection.query('DELETE FROM `ikigaiResponse` WHERE `type`="'+req.body.type+'" AND `idSet`="'+req.body.setid+'"', function (error, results, fields) {
		  	let setid=req.body.setid;
		  	let str='';
		  	req.body.response.map((currElement, index) => {
		  	if(currElement!=''){
				str+='("'+currElement+'","'+req.body.type+'","'+setid+'")';
				if(index!=req.params.length)
				{
					str+=',';
				}
			}	
			});
			console.log('INSERT INTO `ikigaiResponse`(`response`, `type`, `idSet`) VALUES '+removeLastComma(str)+'');
		  	connection.query('INSERT INTO `ikigaiResponse`(`response`, `type`, `idSet`) VALUES '+removeLastComma(str)+'', function (error, results, fields) {
		  		if (error) throw error;
		  		if(results.affectedRows)
		  		{
		  			res.status(200).send({ auth: true, msg:"Operation successfull, redirecting to list",id:setid});
		  		}
		  		else
		  		{
		  			res.status(200).send({ auth: false, msg:"Cannot create ,some error occurred"});
		  		}
		  	})
		  	
		 
		  
			})
		}
    	}
        
	})

})

app.get('/getikigaibyid/:type/:id', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
		connection.query('SELECT * FROM `ikigaiResponse` WHERE `type`="'+req.params.type+'" and `idSet`="'+req.params.id+'"', function (error, results, fields) {
			if (error) throw error;
			if(results.length>0)
			{
				res.status(200).send({ auth: true, count:results.length, data:results});
			}
			else
			{
				res.status(200).send({ auth: true, count:results.length ,data:results});
			}

		});
		  
		}
	})

})

app.get('/getikigaidata', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	id=decoded.id;
    	connection.query("SELECT * ,UNIX_TIMESTAMP(createdAt) as ddate,(SELECT GROUP_CONCAT(' ',response) from ikigaiResponse where type=1 and idset=ikigaiSet.id) as love,(SELECT GROUP_CONCAT(' ',response) from ikigaiResponse where type=2 and idset=ikigaiSet.id) as passion,(SELECT GROUP_CONCAT(' ',response) from ikigaiResponse where type=3 and idset=ikigaiSet.id) as vocation,(SELECT GROUP_CONCAT(' ',response) from ikigaiResponse where type=4 and idset=ikigaiSet.id) as profession FROM ikigaiSet where createdBy='"+id+"'", function (error, results, fields) {
		  if (error) throw error;
		  if(results.length>0)
		  {
		    res.status(200).send({ auth: true, count:results.length, data:results});
		  }
		  else
		  {
		  	res.status(200).send({ auth: true, count:results.length ,data:results});
		  }
		  
		});
    }
    
    
	})

})


app.delete('/deleteikigai/:id', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
    	userid=decoded.id;
		connection.query('DELETE FROM `ikigaiSet` WHERE `createdBy`="'+userid+'" and `id`="'+req.params.id+'"', function (error, results, fields) {
			if (error) throw error;
			if(results.length>0)
			{
				res.status(200).send({ auth: true, count:results.length,flag:true});
			}
			else
			{
				res.status(200).send({ auth: true, count:results.length,flag:false});
			}

		});
		  
		}
	})

})

app.get('/getikigaidata/:id', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
		id=decoded.id;
		setid=req.params.id;
    	connection.query("SELECT *,ikigaiResponse.id as setid FROM ikigaiSet INNER JOIN ikigaiResponse ON ikigaiResponse.idSet = ikigaiSet.id where ikigaiSet.createdBy='"+id+"' AND ikigaiSet.id='"+setid+"'", function (error, results, fields) {
		  if (error) throw error;
		  if(results.length>0)
		  {
		    res.status(200).send({ auth: true, count:results.length, data:results});
		  }
		  else
		  {
		  	res.status(200).send({ auth: true, count:results.length ,data:results});
		  }
		  
		});
		  
		}
	})

})

app.get('/updateikigaidata/:type/:id', function (req, res) {
   	
   	var token = req.headers['x-access-token'];
  	if (!token) 
  	{
  		return res.status(401).send({ auth: false, message: 'No token provided.' });
  	}
  
  	jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
    	return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    else
    {
		id=decoded.id;
		setid=req.params.id;
    	connection.query("UPDATE `ikigaiResponse` SET `type`='"+req.params.type+"' WHERE `id`='"+req.params.id+"'", function (error, results, fields) {
		  if (error) throw error;
		  if(results.length>0)
		  {
		    res.status(200).send({ auth: true, count:results.length});
		  }
		  else
		  {
		  	res.status(200).send({ auth: true, count:results.length});
		  }
		  
		});
		  
		}
	})

})


function removeLastComma(strng){        
    var n=strng.lastIndexOf(",");
    var a=strng.substring(0,n) 
    return a;
}


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


