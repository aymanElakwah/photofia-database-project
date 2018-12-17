-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2018 at 06:15 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

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

-- --------------------------------------------------------

--
-- Table structure for table `awarded`
--

CREATE TABLE `awarded` (
  `awardName` varchar(50) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `camera`
--

CREATE TABLE `camera` (
  `cameraName` varchar(50) NOT NULL,
  `sensorSize` varchar(50) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `resolution` varchar(50) DEFAULT NULL,
  `videoCaptureResolution` varchar(50) DEFAULT NULL,
  `opticalZoom` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customerEmail` varchar(50) NOT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `deviceName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `enroll`
--

CREATE TABLE `enroll` (
  `id` int(11) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  `accepted` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `userEmail` varchar(50) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `eventLocation` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `userEmail` varchar(50) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gift`
--

CREATE TABLE `gift` (
  `giftName` varchar(50) NOT NULL,
  `expirationDate` date DEFAULT NULL,
  `points` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `path` varchar(10) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `photographerEmail` varchar(50) DEFAULT NULL,
  `imageLocation` varchar(50) DEFAULT NULL
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

CREATE TABLE `lens` (
  `lensName` varchar(50) NOT NULL,
  `lensType` varchar(50) DEFAULT NULL,
  `focusType` varchar(50) DEFAULT NULL,
  `minFocalRange` int(11) DEFAULT NULL,
  `maxFocalRange` int(11) DEFAULT NULL,
  `maxApretureRange` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
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

CREATE TABLE `owns` (
  `deviceName` varchar(50) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `photographer`
--

CREATE TABLE `photographer` (
  `bio` varchar(1000) DEFAULT NULL,
  `avgPrice` int(11) DEFAULT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  `qualifications` varchar(1000) DEFAULT NULL,
  `rate` float DEFAULT NULL
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

CREATE TABLE `place` (
  `placeName` varchar(50) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `placePhone` varchar(11) DEFAULT NULL
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

CREATE TABLE `reviewimage` (
  `userEmail` varchar(50) NOT NULL,
  `path` varchar(10) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Triggers `reviewimage`
--
DELIMITER $$
CREATE TRIGGER `update_image_rate_after_delete` AFTER DELETE ON `reviewimage` FOR EACH ROW UPDATE image SET rate = (SELECT AVG(rate) FROM reviewimage where path = OLD.path) WHERE path = OLD.path
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_image_rate_after_insert` AFTER INSERT ON `reviewimage` FOR EACH ROW UPDATE image SET rate = (SELECT AVG(rate) FROM reviewimage where path = NEW.path) WHERE path = NEW.path
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_image_rate_after_update` AFTER UPDATE ON `reviewimage` FOR EACH ROW UPDATE image SET rate = (SELECT AVG(rate) FROM reviewimage where path = NEW.path) WHERE path = NEW.path
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `reviewphotographer`
--

CREATE TABLE `reviewphotographer` (
  `photographerEmail` varchar(50) NOT NULL,
  `customerEmail` varchar(50) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Triggers `reviewphotographer`
--
DELIMITER $$
CREATE TRIGGER `update_photographer_rate_after_delete` AFTER DELETE ON `reviewphotographer` FOR EACH ROW UPDATE photographer SET rate = (SELECT AVG(rate) FROM reviewphotographer WHERE photographerEmail = OLD.photographerEmail) WHERE photographerEmail = OLD.photographerEmail
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_photographer_rate_after_install` AFTER INSERT ON `reviewphotographer` FOR EACH ROW UPDATE photographer SET rate = (SELECT AVG(rate) FROM reviewphotographer WHERE photographerEmail = NEW.photographerEmail) WHERE photographerEmail = NEW.photographerEmail
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `update_photographer_rate_after_update` AFTER UPDATE ON `reviewphotographer` FOR EACH ROW UPDATE photographer SET rate = (SELECT AVG(rate) FROM reviewphotographer WHERE photographerEmail = NEW.photographerEmail) WHERE photographerEmail = NEW.photographerEmail
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `reviewplace`
--

CREATE TABLE `reviewplace` (
  `userEmail` varchar(50) NOT NULL,
  `placeName` varchar(50) NOT NULL,
  `comment` varchar(100) DEFAULT NULL,
  `rate` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `day` int(11) NOT NULL,
  `photographerEmail` varchar(50) NOT NULL,
  `code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userEmail` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `userPhone` varchar(11) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `userAddress` varchar(50) DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `birthDate` date DEFAULT NULL,
  `profilePicture` varchar(10) DEFAULT NULL,
  `privilege` int(2) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userEmail`, `username`, `userPhone`, `password`, `userAddress`, `gender`, `birthDate`, `profilePicture`, `privilege`) VALUES
('ayman.elakwah@gmail.com', 'Ayman', '01100110011', 'password', 'october', b'0', '2018-12-04', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `awarded`
--
ALTER TABLE `awarded`
  ADD PRIMARY KEY (`awardName`,`customerEmail`),
  ADD KEY `customerEmail` (`customerEmail`);

--
-- Indexes for table `camera`
--
ALTER TABLE `camera`
  ADD PRIMARY KEY (`cameraName`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customerEmail`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`deviceName`);

--
-- Indexes for table `enroll`
--
ALTER TABLE `enroll`
  ADD PRIMARY KEY (`id`,`photographerEmail`),
  ADD KEY `photographerEmail` (`photographerEmail`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userEmail` (`userEmail`),
  ADD KEY `eventLocation` (`eventLocation`);

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`photographerEmail`,`userEmail`),
  ADD KEY `userEmail` (`userEmail`);

--
-- Indexes for table `gift`
--
ALTER TABLE `gift`
  ADD PRIMARY KEY (`giftName`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`path`),
  ADD KEY `photographerEmail` (`photographerEmail`),
  ADD KEY `imageLocation` (`imageLocation`);

--
-- Indexes for table `lens`
--
ALTER TABLE `lens`
  ADD PRIMARY KEY (`lensName`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`photographerEmail`,`customerEmail`,`orderCode`,`orderDay`),
  ADD KEY `orders_ibfk_2` (`customerEmail`),
  ADD KEY `orders_ibfk_3` (`orderDay`);

--
-- Indexes for table `owns`
--
ALTER TABLE `owns`
  ADD PRIMARY KEY (`deviceName`,`photographerEmail`),
  ADD KEY `photographerEmail` (`photographerEmail`);

--
-- Indexes for table `photographer`
--
ALTER TABLE `photographer`
  ADD PRIMARY KEY (`photographerEmail`);

--
-- Indexes for table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`placeName`);

--
-- Indexes for table `reviewimage`
--
ALTER TABLE `reviewimage`
  ADD PRIMARY KEY (`userEmail`,`path`),
  ADD KEY `path` (`path`);

--
-- Indexes for table `reviewphotographer`
--
ALTER TABLE `reviewphotographer`
  ADD PRIMARY KEY (`photographerEmail`,`customerEmail`),
  ADD KEY `customerEmail` (`customerEmail`);

--
-- Indexes for table `reviewplace`
--
ALTER TABLE `reviewplace`
  ADD PRIMARY KEY (`userEmail`,`placeName`),
  ADD KEY `placeName` (`placeName`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`day`,`photographerEmail`),
  ADD KEY `photographerEmail` (`photographerEmail`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userEmail`);

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
