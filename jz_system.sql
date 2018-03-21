/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 100109
Source Host           : localhost:3306
Source Database       : jz_system

Target Server Type    : MYSQL
Target Server Version : 100109
File Encoding         : 65001

Date: 2018-03-20 10:03:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for jz_area
-- ----------------------------
DROP TABLE IF EXISTS `jz_area`;
CREATE TABLE `jz_area` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `parent_id` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_area
-- ----------------------------

-- ----------------------------
-- Table structure for jz_company
-- ----------------------------
DROP TABLE IF EXISTS `jz_company`;
CREATE TABLE `jz_company` (
  `id` int(50) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `company_address` varchar(100) DEFAULT NULL,
  `company_contact` varchar(50) DEFAULT NULL,
  `company_phone` varchar(20) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_company
-- ----------------------------

-- ----------------------------
-- Table structure for jz_company_pay
-- ----------------------------
DROP TABLE IF EXISTS `jz_company_pay`;
CREATE TABLE `jz_company_pay` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `pay_nums` float(20,2) NOT NULL,
  `pay_date` varchar(50) NOT NULL,
  `
receive` varchar(100) DEFAULT NULL,
  `house_id` int(50) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_company_pay
-- ----------------------------

-- ----------------------------
-- Table structure for jz_company_send_shop
-- ----------------------------
DROP TABLE IF EXISTS `jz_company_send_shop`;
CREATE TABLE `jz_company_send_shop` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `shop_name` varchar(100) NOT NULL,
  `house_id` int(50) DEFAULT NULL,
  `send_date` varchar(50) DEFAULT NULL,
  `receive_date` varchar(50) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_company_send_shop
-- ----------------------------

-- ----------------------------
-- Table structure for jz_contact
-- ----------------------------
DROP TABLE IF EXISTS `jz_contact`;
CREATE TABLE `jz_contact` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `work_type` char(10) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_contact
-- ----------------------------

-- ----------------------------
-- Table structure for jz_house
-- ----------------------------
DROP TABLE IF EXISTS `jz_house`;
CREATE TABLE `jz_house` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `startDate` varchar(50) DEFAULT NULL,
  `risk` varchar(255) DEFAULT '' COMMENT '风险监控',
  `name` varchar(255) NOT NULL,
  `area_id` int(50) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `size` float(20,2) DEFAULT '0.00' COMMENT '面积',
  `price` float(20,2) DEFAULT NULL,
  `company_id` int(50) DEFAULT NULL,
  `work_rate` int(4) DEFAULT '0' COMMENT '工作进度',
  `pay_rate` int(4) DEFAULT '0' COMMENT '支付进度',
  `income` float(20,2) NOT NULL DEFAULT '0.00' COMMENT '盈亏',
  `end_date` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_house
-- ----------------------------

-- ----------------------------
-- Table structure for jz_houseowners_pay
-- ----------------------------
DROP TABLE IF EXISTS `jz_houseowners_pay`;
CREATE TABLE `jz_houseowners_pay` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `house_id` int(50) NOT NULL DEFAULT '0',
  `pay_nums` float(255,2) NOT NULL,
  `pay_date` varchar(50) NOT NULL,
  `receive` varchar(100) NOT NULL DEFAULT '' COMMENT '收款方',
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_houseowners_pay
-- ----------------------------

-- ----------------------------
-- Table structure for jz_pay_detail
-- ----------------------------
DROP TABLE IF EXISTS `jz_pay_detail`;
CREATE TABLE `jz_pay_detail` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `type` char(4) NOT NULL,
  `money` float(20,2) NOT NULL,
  `date` varchar(50) NOT NULL,
  `house_id` int(50) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_pay_detail
-- ----------------------------

-- ----------------------------
-- Table structure for jz_user
-- ----------------------------
DROP TABLE IF EXISTS `jz_user`;
CREATE TABLE `jz_user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nick` varchar(100) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `auth` tinyint(2) NOT NULL,
  `created_time` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_user
-- ----------------------------
INSERT INTO `jz_user` VALUES ('1', 'admin', 'admin', '超级管理员', '15802816160', '胡先生', '1', '');

-- ----------------------------
-- Table structure for jz_worker
-- ----------------------------
DROP TABLE IF EXISTS `jz_worker`;
CREATE TABLE `jz_worker` (
  `id` int(50) unsigned NOT NULL AUTO_INCREMENT,
  `pay_date` varchar(50) DEFAULT NULL,
  `house_id` int(50) NOT NULL,
  `worker_name` varchar(50) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `item_money` float(20,2) NOT NULL DEFAULT '0.00' COMMENT '项目金额',
  `phone` varchar(20) NOT NULL,
  `start_date` varchar(50) DEFAULT NULL,
  `end_date` varchar(50) DEFAULT NULL,
  `item_state` tinyint(2) NOT NULL DEFAULT '0' COMMENT '默认0，未完工',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of jz_worker
-- ----------------------------
