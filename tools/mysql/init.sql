CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(128) NULL,
  `email` VARCHAR(45) NULL,
  `counter` INT DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


