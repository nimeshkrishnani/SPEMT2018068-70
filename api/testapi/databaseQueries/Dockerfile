FROM mysql:5.7
ENV MYSQL_DATABASE="event_information" \
    MYSQL_ROOT_PASSWORD="NIme&1212" \
    MYSQL_USER="root"
COPY initial.sql /docker-entrypoint-initdb.d/
