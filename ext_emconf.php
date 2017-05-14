<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "villakunterbunt".
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
  'title' => 'Villa Kunterbunt Niederkassel',
  'description' => 'Site extension für die Villa Kunterbunt Niederkassel',
  'category' => 'misc',
  'author' => 'Patrick Schriner',
  'author_email' => 'p.schriner@gmail.com',
  'state' => 'beta',
  'uploadfolder' => true,
  'clearCacheOnLoad' => 1,
  'author_company' => '',
  'version' => '0.1.0',
  'constraints' => 
  array (
    'depends' => 
    array (
      'typo3' => '7.6.0-8.99.99',
      'realurl' => '2.1.0-2.99.99'
    ),
    'conflicts' => 
    array (
    ),
    'suggests' => 
    array (
    ),
  ),
  'createDirs' => NULL,
  'clearcacheonload' => true,
  'autoload' => array(
        'psr-4' => array('Pschriner\\Villakunterbunt\\' => 'Classes')
    ),
);

