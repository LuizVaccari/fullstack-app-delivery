CREATE DATABASE  IF NOT EXISTS `delivery_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `delivery_app`;
-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: localhost    Database: delivery_app
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `vehicle`
--

DROP TABLE IF EXISTS `vehicle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicle` (
  `id` int NOT NULL AUTO_INCREMENT,
  `driver_id` int NOT NULL,
  `plate` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  `type` varchar(20) NOT NULL,
  `capacity` varchar(20) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `vehicle_driver_idx` (`driver_id`),
  CONSTRAINT `vehicle_driver` FOREIGN KEY (`driver_id`) REFERENCES `driver` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicle`
--

LOCK TABLES `vehicle` WRITE;
/*!40000 ALTER TABLE `vehicle` DISABLE KEYS */;
INSERT INTO `vehicle` VALUES (2,1,'ASF-1234','Model 1','Truck','5','2022-04-18 22:50:48'),(3,1,'QWE-4321','Model 2','Truck','7','2022-04-18 23:26:16'),(8,4,'AAA-1111','Model 3','Pickup Truck','1','2022-04-19 00:22:49'),(9,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:29:27'),(10,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:29:32'),(11,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:33:11'),(12,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:34:04'),(13,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:34:54'),(14,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:35:30'),(15,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:38:19'),(16,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:38:23'),(17,6,'QQQ-1234','Model 4','Truck','4','2022-04-19 01:38:48'),(18,6,'TESTING','Model 4','Truck','4','2022-04-19 01:40:04'),(19,6,'teste','tsest','teset','teset','2022-04-19 04:09:29');
/*!40000 ALTER TABLE `vehicle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19  8:06:40
