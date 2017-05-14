<?php
defined('TYPO3_MODE') or die();

$boot = function () {
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:villakunterbunt/Configuration/TSconfig/pageTS.txt">');
};

$boot();
unset($boot);
