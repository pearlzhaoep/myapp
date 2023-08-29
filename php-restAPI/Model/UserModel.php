<?php
require_once "Database.php";
require PROJECT_ROOT_PATH . "/DataClass/VocabData.php";
require PROJECT_ROOT_PATH . "/DataClass/VocabExampleData.php";

class UserModel extends Database {
    public function getWordByCategory($categoryId){
        $result = $this->select("SELECT * FROM `vocab` WHERE category = :category", ['category' => $categoryId]);
        $vocabList = [];
        foreach($result as $word){
            $newExamples = [];
            $newWord = new VocabData($word);
            $exampleResult = $this->select("SELECT * FROM `vocab_example` WHERE word_id = :id", ['id' => $word['id']]);
            foreach($exampleResult as $example){
                $newWord->pushExampleList(new VocabExampleData($example));
            }
            array_push($vocabList, $newWord);
        }
        $toJSON = [];
        foreach($vocabList as $vocab){
            array_push($toJSON, $vocab->getVar());
        }
        $toJSON = json_encode($toJSON);
        return $toJSON;
    }
}
?>