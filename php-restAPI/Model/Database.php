<?php
class Database {
    protected $connection = null;

    public function __construct(){
        try {
            $this->connection = new PDO(DB_DSN, DB_USERNAME, DB_PASSWORD);
        } catch(Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function select($query = "", $params = []){
        try {
            $statement = $this->connection->prepare($query);
            $statement->execute($params);
            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            return $result;
        } catch(Exception $e) {
            throw new Exception($e->getMessage());
        }
        return false;
    }
}
?>