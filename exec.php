<?php
try {
	exec('curl http://clgt.vn > cache/abc.txt');
} catch (Exception $e)
{
	var_dump($e);
}
