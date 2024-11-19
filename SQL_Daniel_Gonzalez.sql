CREATE DATABASE tp_example; 
USE tp_example;


CREATE TABLE `tp_document_type` (
  `id` INT(3) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `tp_residence_type` (
  `id` INT(3) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`)
) ;

CREATE TABLE `TP_empleados_2023` (
  `id_employee` INT(11) NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(64) NOT NULL,
  `second_name` VARCHAR(32) DEFAULT NULL,
  `last_name` VARCHAR(64) NOT NULL,
  `last_name2` VARCHAR(32) DEFAULT NULL,
  `document_type` INT(3) DEFAULT NULL,
  `document` INT(11) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `residence_city` INT(3) DEFAULT NULL,
  PRIMARY KEY (`id_employee`),
  KEY `idx_document_type` (`document_type`),
  KEY `idx_residence_city` (`residence_city`),
  CONSTRAINT `fk_document_type`
    FOREIGN KEY (`document_type`) REFERENCES `tp_document_type` (`id`)
    ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `fk_residence_city`
    FOREIGN KEY (`residence_city`) REFERENCES `tp_residence_type` (`id`)
    ON DELETE SET NULL ON UPDATE CASCADE
);
