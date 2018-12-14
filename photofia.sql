-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 14, 2018 at 05:56 PM
-- Server version: 5.7.23
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `photofia`
--
CREATE DATABASE IF NOT EXISTS `photofia` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `photofia`;

-- --------------------------------------------------------

--
-- Table structure for table `awarded`
--

DROP TABLE IF EXISTS `awarded`;
CREATE TABLE IF NOT EXISTS `awarded` (
  `awardName` varchar(50) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`awardName`,`customerEmail`),
  KEY `customerEmail` (`customerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `camera`
--

DROP TABLE IF EXISTS `camera`;
CREATE TABLE IF NOT EXISTS `camera` (
  `cameraName` varchar(50) NOT NULL,
  `sensorSize` varchar(50) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `resolution` varchar(50) DEFAULT NULL,
  `videoCaptureResolution` varchar(50) DEFAULT NULL,
  `opticalZoom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cameraName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
CREATE TABLE IF NOT EXISTS `customer` (
  `customerEmail` varchar(50) NOT NULL,
  `points` int(11) DEFAULT NULL,
  PRIMARY KEY (`customerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

DROP TABLE IF EXISTS `device`;
CREATE TABLE IF NOT EXISTS `device` (
  `deviceName` varchar(50) NOT NULL,
  PRIMARY KEY (`deviceName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `enroll`
--

DROP TABLE IF EXISTS `enroll`;
CREATE TABLE IF NOT EXISTS `enroll` (
  `id` int(11) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  PRIMARY KEY (`id`,`photographerEmail`),
  KEY `photographerEmail` (`photographerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `userEmail` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `eventLocation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userEmail` (`userEmail`),
  KEY `eventLocation` (`eventLocation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
CREATE TABLE IF NOT EXISTS `follow` (
  `userEmail` varchar(50) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  PRIMARY KEY (`photographerEmail`,`userEmail`),
  KEY `userEmail` (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gift`
--

DROP TABLE IF EXISTS `gift`;
CREATE TABLE IF NOT EXISTS `gift` (
  `giftName` varchar(50) NOT NULL,
  `expirationDate` date DEFAULT NULL,
  `points` int(11) DEFAULT NULL,
  PRIMARY KEY (`giftName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
CREATE TABLE IF NOT EXISTS `image` (
  `path` varchar(10) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `photographerEmail` varchar(50) DEFAULT NULL,
  `imageLocation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`path`),
  KEY `photographerEmail` (`photographerEmail`),
  KEY `imageLocation` (`imageLocation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`path`, `type`, `rate`, `description`, `date`, `photographerEmail`, `imageLocation`) VALUES
('123', 'portrait', NULL, 'this is an image!', NULL, 'ayman.elakwah@gmail.com', 'Citystars');

-- --------------------------------------------------------

--
-- Table structure for table `lens`
--

DROP TABLE IF EXISTS `lens`;
CREATE TABLE IF NOT EXISTS `lens` (
  `lensName` varchar(50) NOT NULL,
  `lensType` varchar(50) DEFAULT NULL,
  `focusType` varchar(50) DEFAULT NULL,
  `minFocalRange` int(11) DEFAULT NULL,
  `maxFocalRange` int(11) DEFAULT NULL,
  `maxApretureRange` int(11) DEFAULT NULL,
  PRIMARY KEY (`lensName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `photographerEmail` varchar(50) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `orderCode` int(11) NOT NULL,
  `orderDay` int(11) NOT NULL,
  `accepted` bit(1) DEFAULT NULL,
  PRIMARY KEY (`photographerEmail`,`customerEmail`,`orderCode`,`orderDay`),
  KEY `orders_ibfk_2` (`customerEmail`),
  KEY `orders_ibfk_3` (`orderDay`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `owns`
--

DROP TABLE IF EXISTS `owns`;
CREATE TABLE IF NOT EXISTS `owns` (
  `deviceName` varchar(50) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  PRIMARY KEY (`deviceName`,`photographerEmail`),
  KEY `photographerEmail` (`photographerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `photographer`
--

DROP TABLE IF EXISTS `photographer`;
CREATE TABLE IF NOT EXISTS `photographer` (
  `bio` varchar(1000) DEFAULT NULL,
  `avgPrice` int(11) DEFAULT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  `qualifications` varchar(1000) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`photographerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `photographer`
--

INSERT INTO `photographer` (`bio`, `avgPrice`, `photographerEmail`, `qualifications`, `rate`) VALUES
('I am a photographer', 20, 'ayman.elakwah@gmail.com', 'nothing', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
CREATE TABLE IF NOT EXISTS `place` (
  `placeName` varchar(50) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `placePhone` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`placeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `place`
--

INSERT INTO `place` (`placeName`, `description`, `placePhone`) VALUES
('Citystars', 'This is a place!', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `reviewimage`
--

DROP TABLE IF EXISTS `reviewimage`;
CREATE TABLE IF NOT EXISTS `reviewimage` (
  `userEmail` varchar(50) NOT NULL,
  `path` varchar(10) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`userEmail`,`path`),
  KEY `path` (`path`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Triggers `reviewimage`
--
DROP TRIGGER IF EXISTS `update_image_rate_after_delete`;
DELIMITER $$
CREATE TRIGGER `update_image_rate_after_delete` AFTER DELETE ON `reviewimage` FOR EACH ROW UPDATE image SET rate = (SELECT AVG(rate) FROM reviewimage where path = OLD.path) WHERE path = OLD.path
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `update_image_rate_after_insert`;
DELIMITER $$
CREATE TRIGGER `update_image_rate_after_insert` AFTER INSERT ON `reviewimage` FOR EACH ROW UPDATE image SET rate = (SELECT AVG(rate) FROM reviewimage where path = NEW.path) WHERE path = NEW.path
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `update_image_rate_after_update`;
DELIMITER $$
CREATE TRIGGER `update_image_rate_after_update` AFTER UPDATE ON `reviewimage` FOR EACH ROW UPDATE image SET rate = (SELECT AVG(rate) FROM reviewimage where path = NEW.path) WHERE path = NEW.path
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `reviewphotographer`
--

DROP TABLE IF EXISTS `reviewphotographer`;
CREATE TABLE IF NOT EXISTS `reviewphotographer` (
  `photographerEmail` varchar(50) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`photographerEmail`,`customerEmail`),
  KEY `customerEmail` (`customerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Triggers `reviewphotographer`
--
DROP TRIGGER IF EXISTS `update_photographer_rate_after_delete`;
DELIMITER $$
CREATE TRIGGER `update_photographer_rate_after_delete` AFTER DELETE ON `reviewphotographer` FOR EACH ROW UPDATE photographer SET rate = (SELECT AVG(rate) FROM reviewphotographer WHERE photographerEmail = OLD.photographerEmail) WHERE photographerEmail = OLD.photographerEmail
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `update_photographer_rate_after_install`;
DELIMITER $$
CREATE TRIGGER `update_photographer_rate_after_install` AFTER INSERT ON `reviewphotographer` FOR EACH ROW UPDATE photographer SET rate = (SELECT AVG(rate) FROM reviewphotographer WHERE photographerEmail = NEW.photographerEmail) WHERE photographerEmail = NEW.photographerEmail
$$
DELIMITER ;
DROP TRIGGER IF EXISTS `update_photographer_rate_after_update`;
DELIMITER $$
CREATE TRIGGER `update_photographer_rate_after_update` AFTER UPDATE ON `reviewphotographer` FOR EACH ROW UPDATE photographer SET rate = (SELECT AVG(rate) FROM reviewphotographer WHERE photographerEmail = NEW.photographerEmail) WHERE photographerEmail = NEW.photographerEmail
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `reviewplace`
--

DROP TABLE IF EXISTS `reviewplace`;
CREATE TABLE IF NOT EXISTS `reviewplace` (
  `userEmail` varchar(50) NOT NULL,
  `placeName` varchar(50) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  PRIMARY KEY (`userEmail`,`placeName`),
  KEY `placeName` (`placeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
CREATE TABLE IF NOT EXISTS `schedule` (
  `day` int(11) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  `code` int(11) DEFAULT NULL,
  PRIMARY KEY (`day`,`photographerEmail`),
  KEY `photographerEmail` (`photographerEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `userEmail` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `userPhone` varchar(11) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `userAddress` varchar(50) DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `profilePicture` varchar(10) DEFAULT NULL,
  `privilege` int(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userEmail`, `username`, `userPhone`, `password`, `userAddress`, `gender`, `birthDate`, `profilePicture`, `privilege`) VALUES
('ayman.elakwah@gmail.com', 'Ayman', '01100110011', 'password', 'october', b'0', '2018-12-04', NULL, 1);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `awarded`
--
ALTER TABLE `awarded`
  ADD CONSTRAINT `awarded_ibfk_1` FOREIGN KEY (`awardName`) REFERENCES `gift` (`giftName`),
  ADD CONSTRAINT `awarded_ibfk_2` FOREIGN KEY (`customerEmail`) REFERENCES `customer` (`customerEmail`);

--
-- Constraints for table `camera`
--
ALTER TABLE `camera`
  ADD CONSTRAINT `camera_ibfk_1` FOREIGN KEY (`cameraName`) REFERENCES `device` (`deviceName`);

--
-- Constraints for table `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`customerEmail`) REFERENCES `users` (`userEmail`);

--
-- Constraints for table `enroll`
--
ALTER TABLE `enroll`
  ADD CONSTRAINT `enroll_ibfk_1` FOREIGN KEY (`id`) REFERENCES `events` (`id`),
  ADD CONSTRAINT `enroll_ibfk_2` FOREIGN KEY (`photographerEmail`) REFERENCES `photographer` (`photographerEmail`);

--
-- Constraints for table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`userEmail`) REFERENCES `users` (`userEmail`),
  ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`eventLocation`) REFERENCES `place` (`placeName`);

--
-- Constraints for table `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`photographerEmail`) REFERENCES `photographer` (`photographerEmail`),
  ADD CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`userEmail`) REFERENCES `users` (`userEmail`);

--
-- Constraints for table `image`
--
ALTER TABLE `image`
  ADD CONSTRAINT `image_ibfk_1` FOREIGN KEY (`photographerEmail`) REFERENCES `photographer` (`photographerEmail`),
  ADD CONSTRAINT `image_ibfk_2` FOREIGN KEY (`imageLocation`) REFERENCES `place` (`placeName`);

--
-- Constraints for table `lens`
--
ALTER TABLE `lens`
  ADD CONSTRAINT `lens_ibfk_1` FOREIGN KEY (`lensName`) REFERENCES `device` (`deviceName`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`photographerEmail`) REFERENCES `schedule` (`photographerEmail`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`customerEmail`) REFERENCES `customer` (`customerEmail`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`orderDay`) REFERENCES `schedule` (`day`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `owns`
--
ALTER TABLE `owns`
  ADD CONSTRAINT `owns_ibfk_1` FOREIGN KEY (`deviceName`) REFERENCES `device` (`deviceName`),
  ADD CONSTRAINT `owns_ibfk_2` FOREIGN KEY (`photographerEmail`) REFERENCES `photographer` (`photographerEmail`);

--
-- Constraints for table `photographer`
--
ALTER TABLE `photographer`
  ADD CONSTRAINT `photographer_ibfk_1` FOREIGN KEY (`photographerEmail`) REFERENCES `users` (`userEmail`);

--
-- Constraints for table `reviewimage`
--
ALTER TABLE `reviewimage`
  ADD CONSTRAINT `reviewimage_ibfk_1` FOREIGN KEY (`userEmail`) REFERENCES `users` (`userEmail`),
  ADD CONSTRAINT `reviewimage_ibfk_2` FOREIGN KEY (`path`) REFERENCES `image` (`path`);

--
-- Constraints for table `reviewphotographer`
--
ALTER TABLE `reviewphotographer`
  ADD CONSTRAINT `reviewphotographer_ibfk_1` FOREIGN KEY (`photographerEmail`) REFERENCES `photographer` (`photographerEmail`),
  ADD CONSTRAINT `reviewphotographer_ibfk_2` FOREIGN KEY (`customerEmail`) REFERENCES `customer` (`customerEmail`);

--
-- Constraints for table `reviewplace`
--
ALTER TABLE `reviewplace`
  ADD CONSTRAINT `reviewplace_ibfk_1` FOREIGN KEY (`userEmail`) REFERENCES `users` (`userEmail`),
  ADD CONSTRAINT `reviewplace_ibfk_2` FOREIGN KEY (`placeName`) REFERENCES `place` (`placeName`);

--
-- Constraints for table `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`photographerEmail`) REFERENCES `photographer` (`photographerEmail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
