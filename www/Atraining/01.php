<?php
/**
 * Created by PhpStorm.
 * User: ZZE-LapTop
 * Date: 2018/5/14
 * Time: 12:34
 */
class fileOperation{
    private $fileName;
    private $method;//read or write
                     //delete or append
    private $exist;//whether exist
    private $fileContent;

    public function __construct($fileName)
{
    $this->fileName=$fileName;
    $fileExist=@fopen($fileName,"r");
    if(!$fileExist)
        $this->exist=false;
    else
        $this->exist=true;
    fclose($fileExist);
}
    protected function MethodJudge($method){//判断参数是否合法
        $this->method=$method;
        if($this->method=="r" || $this->method=="w" ||$this->method=="d" ||$this->method=="a"){
            return true;
        }
        else
            return false;
    }
    public function Operate($method,&$content){//w,a
        if($this->MethodJudge($method)){
            switch($this->method){
                case "r":
                case "R":
                    if(!$this->exist){
                        return false;
                    }
                    else
                    {
                        $fileHandle=fopen($this->fileName,"r");
                        if(!$fileHandle){
                            return false;
                        }
                        else{
                           $content = fgets($fileHandle);
                        }
                    }
                    break;
                case "w":
                case"W":
                    $fileHandle=fopen($this->fileName,$this->method);
                    if(!$fileHandle){
                        return false;
                    }
                    else{
                        fputs($fileHandle,$content);
                    }
                    break;
                case "d":
                case"D":
                    if(!$this->exist){
                        return true;
                    }
                    else{
                        return unlink($this->fileName);
                    }
                    break;
                case "a":
                case"A":
                    $fileHandle=fopen($this->fileName,"a+");
                    if (!$fileHandle){
                        return false;
                    }
                    else{
                        fputs($fileHandle,$content);
                    }
                    break;
            }
        }
        else{
            echo "error paramenters";
            return false;
        }
        return true;
    }
    public function GetFileLength(){
        return filesize($this->fileName);
    }
    public function isReadableorWriteable($opt){
        $returnValue=false;
        if($opt=="ra"){
            $returnValue=is_readable($this->fileName);
        }
        else if($opt=="wa"){
            $returnValue=is_writable($this->fileName);
        }
        return $returnValue;
    }
}

$fileR=new fileOperation("file.txt");
$content="none";
$ret = $fileR->Operate("a",$content);
if($ret)
    echo $content;
else
    print("error");

echo $fileR->GetFileLength();
echo "<br/>";
echo $fileR->isReadableorWriteable("wa");

?>