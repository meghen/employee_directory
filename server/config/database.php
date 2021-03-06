<?php
class Database{
    // Local database credentials
    private $host = "localhost:8889";
    private $name = "workplace";
    private $user = "root";
    private $password = "";
    public $conn;

    // Connect to mySQL database
    public function getConnection(){
        $this->conn = null;

        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->name, $this->user, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }

}
?>