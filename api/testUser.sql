-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 23, 2019 at 07:30 PM
-- Server version: 5.7.24-0ubuntu0.16.04.1
-- PHP Version: 7.0.32-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testUser`
--

-- --------------------------------------------------------

--
-- Table structure for table `ikigaiResponse`
--

CREATE TABLE `ikigaiResponse` (
  `id` int(11) NOT NULL,
  `response` text NOT NULL,
  `type` int(11) DEFAULT NULL COMMENT '1=Love,2=GoodAt,3=profession,4=Needs',
  `idSet` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ikigaiResponse`
--

INSERT INTO `ikigaiResponse` (`id`, `response`, `type`, `idSet`) VALUES
(506, 'Driving', 1, 56),
(507, 'Travelling', 1, 56),
(508, 'Pets', 1, 56),
(509, 'Social', 2, 56),
(510, 'Test', 2, 56),
(511, 'Test', 2, 56),
(512, 'fdgdfgd', 3, 56),
(513, 'dfgdfg', 3, 56),
(514, 'dgdfg', 3, 56),
(515, 'dfgdfgdf', 3, 56),
(516, 'fddsfs', 4, 56),
(517, 'fdsf', 4, 56),
(518, 'sdfsd', 4, 56),
(519, 'sdfds', 4, 56),
(1118, 'Passion1', 1, 57),
(1119, 'Passion4', 1, 57),
(1120, 'Mission2', 1, 57),
(1121, 'Mission3', 1, 57),
(1122, 'Passion2', 2, 57),
(1123, 'Passion3', 2, 57),
(1124, 'Mission1', 2, 57),
(1125, 'Mission4', 2, 57),
(1126, 'Vocation1', 3, 57),
(1127, 'Vocation2', 3, 57),
(1128, 'Profession3', 3, 57),
(1129, 'Profession4', 3, 57),
(1130, 'Vocation3', 4, 57),
(1131, 'Vocation4', 4, 57),
(1132, 'Profession1', 4, 57),
(1133, 'Profession2', 4, 57),
(1165, 'Test1', 1, 58),
(1166, 'Test2', 1, 58),
(1167, 'Test3', 1, 58),
(1168, 'Missontest1', 1, 58),
(1169, 'Missontest2', 2, 58),
(1170, 'Missiontest3', 2, 58),
(1171, 'Missiontest4', 2, 58),
(1172, 'Professiontest1', 2, 58),
(1173, 'Vocationtest1', 3, 58),
(1174, 'vocationtest2', 3, 58),
(1175, 'vocationtest3', 3, 58),
(1176, 'vopcationtest4', 3, 58),
(1177, 'Test4', 4, 58),
(1178, 'Professiontest2', 4, 58),
(1179, 'Professiontest3', 4, 58),
(1180, 'Professiontest4', 4, 58);

-- --------------------------------------------------------

--
-- Table structure for table `ikigaiSet`
--

CREATE TABLE `ikigaiSet` (
  `id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `createdBy` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ikigaiSet`
--

INSERT INTO `ikigaiSet` (`id`, `createdAt`, `createdBy`) VALUES
(56, '2019-03-22 03:35:05', 1),
(57, '2019-03-22 14:36:47', 1),
(58, '2019-03-22 15:19:37', 1);

--
-- Triggers `ikigaiSet`
--
DELIMITER $$
CREATE TRIGGER `DELETERESPONSE` AFTER DELETE ON `ikigaiSet` FOR EACH ROW BEGIN
DELETE FROM `ikigaiResponse` WHERE `idSet`=OLD.id;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `list_members`
--

CREATE TABLE `list_members` (
  `id_ls_mem` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `fk_mem` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `list_members`
--

INSERT INTO `list_members` (`id_ls_mem`, `fname`, `mname`, `lname`, `email`, `description`, `active`, `created_at`, `fk_mem`) VALUES
(1, 'sfdsfsd', 'sdfsdfdsfsd', 'sdfsdfss', 'sdfsdfds@gh.com', 'sdvsdvsdvss', 0, '2019-01-20 08:45:11', 1),
(2, 'update', 'done', 'successfully', 'test@update.com', 'Test description', 1, '2019-01-20 10:03:40', 1),
(6, 'sdfsdfds', 'sfsfs', 'sdfsdfs', 'sdfsd@test.com', 'asdffdsfsdfs', 1, '2019-01-20 10:08:08', 1),
(8, 'sdfdsfsfs', 'sdfsfsfs', 'sdfdsfdsfs', 'sdsfdsf@rest.com', 'sdfsfsd', 0, '2019-01-20 10:09:06', 1),
(10, 'undefined', 'undefined', 'undefined', 'undefined', 'undefined', 0, '2019-01-20 10:31:08', 1),
(14, 'sdfsfs', 'sdfsfs', 'sdfsfs', 'sdfds@ert.com', 'sdvdsvsd', 1, '2019-01-20 10:36:34', 1);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id_mem` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id_mem`, `username`, `password`, `active`) VALUES
(1, 'testuser', '5d9c68c6c50ed3d02a2fcf54f63993b6', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ikigaiResponse`
--
ALTER TABLE `ikigaiResponse`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ikigaiSet`
--
ALTER TABLE `ikigaiSet`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `list_members`
--
ALTER TABLE `list_members`
  ADD PRIMARY KEY (`id_ls_mem`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id_mem`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ikigaiResponse`
--
ALTER TABLE `ikigaiResponse`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1181;
--
-- AUTO_INCREMENT for table `ikigaiSet`
--
ALTER TABLE `ikigaiSet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
--
-- AUTO_INCREMENT for table `list_members`
--
ALTER TABLE `list_members`
  MODIFY `id_ls_mem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id_mem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
