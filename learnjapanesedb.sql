/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50712
 Source Host           : localhost
 Source Database       : learnjapanesedb

 Target Server Type    : MySQL
 Target Server Version : 50712
 File Encoding         : utf-8

 Date: 10/17/2016 01:44:17 AM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tb.kana`
-- ----------------------------
DROP TABLE IF EXISTS `tb.kana`;
CREATE TABLE `tb.kana` (
  `recid` int(11) NOT NULL AUTO_INCREMENT,
  `rome` varchar(5) NOT NULL DEFAULT '',
  `hiragana` varchar(5) NOT NULL DEFAULT '',
  `katakana` varchar(5) NOT NULL DEFAULT '',
  `type` varchar(5) NOT NULL,
  PRIMARY KEY (`recid`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `tb.kana`
-- ----------------------------
BEGIN;
INSERT INTO `tb.kana` VALUES ('1', 'a', 'あ', 'ア', 'a'), ('2', 'i', 'い', 'イ', 'a'), ('3', 'u', 'う', 'ウ', 'a'), ('4', 'e', 'え', 'エ', 'a'), ('5', 'o', 'お', 'オ', 'a'), ('6', 'ka', 'か', 'カ', 'ka'), ('7', 'ki', 'き', 'キ', 'ka'), ('8', 'ku', 'く', 'ク', 'ka'), ('9', 'ke', 'け', 'ケ', 'ka'), ('10', 'ko', 'こ', 'コ', 'ka'), ('11', 'sa', 'さ', 'サ', 'sa'), ('12', 'shi', 'し', 'シ', 'sa'), ('13', 'su', 'す', 'ス', 'sa'), ('14', 'se', 'せ', 'セ', 'sa'), ('15', 'so', 'そ', 'ソ', 'sa'), ('16', 'ta', 'た', 'タ', 'ta'), ('17', 'chi', 'ち', 'チ', 'ta'), ('18', 'tsu', 'つ', 'ツ', 'ta'), ('19', 'te', 'て', 'テ', 'ta'), ('20', 'to', 'と', 'ト', 'ta'), ('21', 'na', 'な', 'ナ', 'na'), ('22', 'ni', 'に', 'ニ', 'na'), ('23', 'nu', 'ぬ', 'ヌ', 'na'), ('24', 'ne', 'ね', 'ネ', 'na'), ('25', 'no', 'の', 'ノ', 'na'), ('26', 'ha', 'は', 'ハ', 'ha'), ('27', 'hi', 'ひ', 'ヒ', 'ha'), ('28', 'hu', 'ふ', 'フ', 'ha'), ('29', 'he', 'へ', 'ヘ', 'ha'), ('30', 'ho', 'ほ', 'ホ', 'ha'), ('31', 'ma', 'ま', 'マ', 'ma'), ('32', 'mi', 'み', 'ミ', 'ma'), ('33', 'mu', 'む', 'ム', 'ma'), ('34', 'me', 'め', 'メ', 'ma'), ('35', 'mo', 'も', 'モ', 'ma'), ('36', 'ya', 'や', 'ヤ', 'ya'), ('37', 'i', 'い', 'イ', 'ya'), ('38', 'yu', 'ゆ', 'ユ', 'ya'), ('39', 'e', 'え', 'エ', 'ya'), ('40', 'yo', 'よ', 'ヨ', 'ya'), ('41', 'ra', 'ら', 'ラ', 'ra'), ('42', 'ri', 'り', 'リ', 'ra'), ('43', 'ru', 'る', 'ル', 'ra'), ('44', 're', 'れ', 'レ', 'ra'), ('45', 'ro', 'ろ', 'ロ', 'ra'), ('46', 'wa', 'わ', 'ワ', 'wa'), ('47', 'i', 'い', 'イ', 'wa'), ('48', 'u', 'う', 'ウ', 'wa'), ('49', 'e', 'え', 'エ', 'wa'), ('50', 'wo', 'を', 'ヲ', 'wa');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
