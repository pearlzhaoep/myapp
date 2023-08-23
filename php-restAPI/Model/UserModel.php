<?php
require_once "Database.php";

class UserModel extends Database {
    public function getWordByCategory($categoryId){
        return $this->select("SELECT vocab.id, word, word_audio, meme, vocab_example.word_id, vocab_example.fr, vocab_example.en, vocab_explanation.word_id, vocab_explanation.fr, vocab_explanation.en FROM vocab INNER JOIN vocab_example on vocab.id = vocab_example.word_id INNER JOIN vocab_explanation on vocab.id = vocab_example.word_id WHERE vocab.category = :category", ['category' => $categoryId]);
    }
}
?>