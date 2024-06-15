<?php
date_default_timezone_set ("Asia/Calcutta"); echo "Date: ";
echo date("d/m/y"); echo "<br> Time: ";
echo date(" H:i:s A", time()); echo "<br> Day: ";
$day=date("l"); echo $day;
?>
