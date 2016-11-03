<?php

$database = new SimpleXMLElement("../parameters.xml",NULL, TRUE);

//BDD Connexion check parameters file to change the connexion values
try
{
	$bdd = new PDO($database->type.':host='.$database->host.';
                          port='.$database->port.';
                          dbname='.$database->database_name.';
                          charset='.$database->charset.'',
                          $database->login, 
                          $database->password);
    
}
catch (Exception $e)
{    
        $fp = fopen('../log/exceptions.txt', 'a');
        fwrite($fp, 'Error : ' . $e->getMessage()."\n");
        fclose($fp);    
        die();
}