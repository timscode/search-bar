<?php

include("bdd/ajaxCoDb.php");




//SQL Request
//!\\ Check incomming client params before send to db
$sql = "SELECT ".$database->sql->column_name." 
        FROM ".$database->sql->table_name."
        WHERE ".$database->sql->column_name." 
        LIKE '".$_POST['info']."%'  
        ORDER BY ".$database->sql->column_name." 
        Limit 0, 9";

$reponse = $bdd->query($sql);

//Send To client
$i=0;
while ($donnees = $reponse->fetch())
{
    if(!$donnees['Name'])
        return false;
    
    echo "<button class='datas' role='".$i."'>".$donnees['Name']."</button>";
    $i++;
}

