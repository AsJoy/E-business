-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: weishop
-- ------------------------------------------------------
-- Server version	5.7.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_order`
--

DROP TABLE IF EXISTS `t_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKA0C0C3C3E3763469` (`user_id`),
  CONSTRAINT `FKA0C0C3C3E3763469` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`telephone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_order`
--

LOCK TABLES `t_order` WRITE;
/*!40000 ALTER TABLE `t_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_order_product`
--

DROP TABLE IF EXISTS `t_order_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_order_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `count` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `shop_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK6B8BC473E46A7E4B` (`order_id`),
  KEY `FK6B8BC473676F6089` (`shop_id`),
  KEY `FK6B8BC473E4B0FE6B` (`product_id`),
  CONSTRAINT `FK6B8BC473676F6089` FOREIGN KEY (`shop_id`) REFERENCES `t_shop` (`id`),
  CONSTRAINT `FK6B8BC473E46A7E4B` FOREIGN KEY (`order_id`) REFERENCES `t_order` (`id`),
  CONSTRAINT `FK6B8BC473E4B0FE6B` FOREIGN KEY (`product_id`) REFERENCES `t_product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_order_product`
--

LOCK TABLES `t_order_product` WRITE;
/*!40000 ALTER TABLE `t_order_product` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_order_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_product`
--

DROP TABLE IF EXISTS `t_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `amount` int(11) NOT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `leftAmount` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `oldPrice` int(11) NOT NULL,
  `picSrc` varchar(255) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  `shop_id` int(11) DEFAULT NULL,
  `height` float NOT NULL,
  `width` float NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKA91FC024676F6089` (`shop_id`),
  CONSTRAINT `FKA91FC024676F6089` FOREIGN KEY (`shop_id`) REFERENCES `t_shop` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_product`
--

LOCK TABLES `t_product` WRITE;
/*!40000 ALTER TABLE `t_product` DISABLE KEYS */;
INSERT INTO `t_product` VALUES (22,30,NULL,'123123qwe',0,'天空花园',100,'resources/dc1abb59-0537-4d3e-9e33-5a5c90c3ed551.jpeg',10,1,24,683,480),(23,30,NULL,'hello 木马',0,'菲洛丽亚',100,'resources/d515182c-918c-4121-a5a1-d675db0883e62.jpeg',10,1,24,640,427),(24,30,NULL,'hello 木马',0,'天色绯红',100,'resources/f355d52c-a46f-4e2e-a9a5-098c77de128a4.jpeg',10,1,24,543,405),(25,30,NULL,'hello 木马',0,'夏日新曲',100,'resources/9ab0136a-cc4f-4f82-8367-1ab2b189cbde5.jpeg',10,1,24,720,480),(26,30,NULL,'过个国歌',0,'小清新',100,'resources/a6f9147b-d13c-44ec-b0bb-dcf32de6e7706.jpeg',10,1,24,480,360),(27,30,NULL,'生活孜然味',0,'遇见未来',100,'resources/a5c2bddb-1f9e-4d7b-a949-4564bf0f0beb480.jpeg',10,1,24,717,480),(28,30,NULL,'生活孜然味',0,'遇见未来',100,'resources/dea3df27-0bde-43d8-bb06-fd4486a1487d2.jpeg',10,1,24,640,427),(29,30,NULL,'生活孜然味',0,'天边的自己',100,'resources/3c0a75ec-efe5-476d-9f18-eda46b0f750d6.jpeg',10,1,24,480,360),(30,30,NULL,'生活孜然味',0,'果核人生',100,'resources/c5f027ff-c852-4663-b4c8-5400d9a526335.jpeg',10,1,24,720,480),(31,30,NULL,'生活孜然味',0,'生活的姿态',100,'resources/691a248f-189b-45d3-8fd1-18d789e7cda85.jpeg',10,1,24,720,480),(32,30,NULL,'生活孜然味',0,'ambitions for',100,'resources/6584d355-1547-4dbe-a88c-1b0b7ccd3942480.jpeg',10,1,24,717,480),(33,30,NULL,'生活孜然味',0,'alibaba',100,'resources/5be3a70b-2f4f-4809-acb3-a97cf4091a0b5.jpeg',10,1,24,720,480),(34,30,NULL,'生活孜然味',0,'路过生活',100,'resources/808c5bff-2733-4eb3-b175-1edd631448364.jpeg',10,1,24,543,405),(35,30,NULL,'生活孜然味',0,'否定之否定',100,'resources/5f62bee8-4819-4a8d-808f-f56aa87af97c1.jpeg',10,1,24,683,480),(36,100,NULL,'路人皆知',0,'天马行空',100,'resources/9d3ddecf-a9d1-4478-b4b6-d72aeef4b9a2480.jpeg',10,1,24,717,480),(37,10,NULL,'产品简述',0,'天马行空',10,'resources/206eb4a9-1b2c-4128-a111-628987fb15095.jpeg',10,1,24,720,480),(38,10,NULL,'产品简述',0,'天马行空',10,'resources/d18cee54-d1c5-47c6-9421-9a5eadf0df7c4.jpeg',10,1,24,543,405),(39,10,NULL,'产品简述',0,'天马行空',10,'resources/a437eaf1-efef-4a1c-9860-3cc370c9b3e9shopbg.jpg',10,1,24,394,700),(40,10,NULL,'产品简述',0,'天马行空',10,'resources/68e0091b-dc1a-49ef-8aeb-72beeff009031.jpeg',10,1,24,683,480),(41,10,NULL,'产品简述',0,'天马行空',10,'resources/e5c16354-1d95-464a-9e33-12ca8770d6d2480.jpeg',10,1,24,717,480),(42,10,NULL,'产品简述',0,'天马行空',10,'resources/8bcb4eec-9463-4912-b6b6-2f14d2375c245.jpeg',10,1,24,720,480),(43,10,NULL,'产品简述',0,'天马行空',10,'resources/eaf6c4b4-3714-4896-8a96-e664a27af22b2.jpeg',10,1,24,640,427),(44,10,NULL,'产品简述',0,'天马行空',10,'resources/08ac744c-6d27-49d9-a04c-e5b8f9abc97a4.jpeg',10,1,24,543,405),(45,10,NULL,'产品简述',0,'天马行空',10,'resources/9bce4e04-7011-4b46-80cd-d56e34f5da703.jpeg',10,1,24,720,480),(46,10,NULL,'产品简述',0,'天马行空',10,'resources/f1fd72b4-8164-4011-be2e-996a903bbf8e480.jpeg',10,1,24,717,480),(47,10,NULL,'产品简述',0,'天马行空',10,'resources/834ba045-d4a8-4c04-9a9a-c4e2765aaa1bshopbg.jpg',10,1,24,394,700),(48,10,NULL,'产品简述',0,'天马行空',10,'resources/628837ce-4b7f-48d8-9cf7-f73101dba7004.jpeg',10,1,24,543,405),(49,10,NULL,'产品简述',0,'天马行空',10,'resources/6bedc274-dbe2-4d19-96a5-c136062ea34b2.jpeg',10,1,24,640,427),(50,10,NULL,'产品简述',0,'天马行空',10,'resources/df29f430-512c-4896-9583-026f20805fb11.jpeg',10,1,24,683,480),(51,10,NULL,'产品简述',0,'天马行空',10,'resources/49d26a54-b98f-490d-9607-bcb0963a562e5.jpeg',10,1,24,720,480),(52,10,NULL,'产品简述',0,'天马行空',10,'resources/653a9b29-6e53-4445-aae3-333bb173becc6.jpeg',10,1,24,480,360),(53,10,NULL,'产品简述',0,'天马行空',10,'resources/fdc6ac3a-805f-486b-860c-538c43e1df92shopbg.jpg',10,1,24,394,700),(54,10,NULL,'qwe',0,'qwe',100,'resources/06ee9574-7830-4641-81e5-9354abe0277f480.jpeg',100,0,24,717,480),(55,10,NULL,'qweqwe',0,'qweqweqwe',10,'resources/0dd8f9d6-e6f2-4572-8350-6475862b58f78.jpeg',10,0,25,320,480);
/*!40000 ALTER TABLE `t_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_shop`
--

DROP TABLE IF EXISTS `t_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `background` varchar(255) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `picSrc` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKCB62BBE1E3763469` (`user_id`),
  CONSTRAINT `FKCB62BBE1E3763469` FOREIGN KEY (`user_id`) REFERENCES `t_user` (`telephone`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_shop`
--

LOCK TABLES `t_shop` WRITE;
/*!40000 ALTER TABLE `t_shop` DISABLE KEYS */;
INSERT INTO `t_shop` VALUES (2,'235435',NULL,'123123','123123',NULL,'12313'),(5,'45657765','2016-06-24 02:48:37','23543','2312','/resources/00000000-3b9a-ca00-0000-000000000001psb.jpeg','12313'),(6,'0-090-87897','2016-06-24 02:50:12','787889','224','resources/00000000-3b9a-ca00-0000-000000000001psb.jpeg','12313'),(7,'0-090-87897','2016-06-24 02:53:41','787889','224','resources/00000000-3b9a-ca00-0000-000000000001psb.jpeg','12313'),(10,'qweqwe','2016-06-25 01:09:57','qweqwe','qweqweqwe','http://localhost:8989/resources/00000000-3b9a-ca00-0000-000000000001psb.jpeg','12313'),(20,'green','2016-06-25 12:48:18','qwe','qwe','resources/be0a46dc-8f31-493b-ac0a-d39f8cca578dpsb.jpeg','qweqweqwsdf'),(21,'blue','2016-06-25 12:50:14','123','123123qwe','resources/0942ac2c-a4e3-46f7-a958-2e8398d96a3apsb.jpeg','qweqweqwsdf'),(24,'#fff','2016-06-25 15:08:55','稍微加一些描述','稍微加一些描述','resources/be0a46dc-8f31-123-ac0a-d39f8cca578dpsb.jpeg','qweqweqweqqweqwret'),(25,'darkgray','2016-06-30 21:05:35','qweqwe','qweqweqwe','resources/9ff7f72d-8423-4b0d-9670-85ccbe95dd81=.png','qweqweqweqqweqwret'),(26,'gray','2016-07-01 11:10:32','qweqwe','ad','resources/68d6e44a-9cbd-4de2-b174-1bc20ff89ea76.jpeg','qweqweqweqqweqwret');
/*!40000 ALTER TABLE `t_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_user`
--

DROP TABLE IF EXISTS `t_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_user` (
  `telephone` varchar(255) NOT NULL,
  `create_date` datetime DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(16) DEFAULT NULL,
  `picSrc` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL,
  `type` int(11) NOT NULL,
  PRIMARY KEY (`telephone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_user`
--

LOCK TABLES `t_user` WRITE;
/*!40000 ALTER TABLE `t_user` DISABLE KEYS */;
INSERT INTO `t_user` VALUES ('12313',NULL,NULL,'qweqweqweqwe',NULL,'123',0,0),('12313qweqwe',NULL,NULL,'rytyytutyu',NULL,'123',0,0),('12313qweqwe2',NULL,NULL,'wwerereter',NULL,'123',0,0),('admin',NULL,NULL,'admin123',NULL,'超级管理员',0,0),('qeqweqweqwe',NULL,NULL,'qweqweqweqwe',NULL,'qweqwe',0,0),('qwe',NULL,NULL,'yrtyrtyryrtyrt',NULL,'qwe',0,0),('qweqweqwe',NULL,NULL,'qweqweqwe',NULL,'qwe',0,0),('qweqweqweq',NULL,NULL,'qweqqweqwe',NULL,'qwe',0,0),('qweqweqweqqweqwret',NULL,NULL,'qweqweqwe',NULL,'qwqweqweqqwe',0,0),('qweqweqweqweqqweqwret',NULL,NULL,'qweqweqweqwe',NULL,'qwe',0,0),('qweqweqweqweqwret',NULL,NULL,'qweqweqwe',NULL,'qweq',0,0),('qweqweqwsdf',NULL,NULL,'qweqweqwe',NULL,'qwe',0,0);
/*!40000 ALTER TABLE `t_user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-30 11:58:32
