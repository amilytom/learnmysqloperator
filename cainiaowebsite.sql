# Host: localhost  (Version: 5.5.53)
# Date: 2020-09-13 01:06:11
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "websites"
#

DROP TABLE IF EXISTS `websites`;
CREATE TABLE `websites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(20) NOT NULL DEFAULT '' COMMENT '站点名称',
  `url` varchar(255) NOT NULL DEFAULT '',
  `alexa` int(11) NOT NULL DEFAULT '0' COMMENT 'Alexa 排名',
  `country` char(10) NOT NULL DEFAULT '' COMMENT '国家',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "websites"
#

INSERT INTO `websites` VALUES (1,'Google','https://www.google.cm/',1,'USA'),(2,'淘宝','https://www.taobao.com/',13,'CN'),(3,'菜鸟教程','http://www.runoob.com/',4689,'CN'),(4,'微博','http://weibo.com/',20,'CN'),(5,'Facebook','https://www.facebook.com/',3,'USA');
