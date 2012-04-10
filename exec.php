<?php
$uri = $_GET['query'];
try {
	exec('curl ' . $uri.  ' > cache/abc.txt');
} catch (Exception $e)
{
	var_dump($e);
}
