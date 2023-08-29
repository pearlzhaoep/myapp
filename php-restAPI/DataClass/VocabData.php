<?php
class VocabData {
    private $id;
    private $word;
    private $category;
    private $wordAudio;
    private $meme;
    private $exampleList;
    private $explainFrench;
    private $explainForeign;

    function __construct($word){
        $this->set_id($word['id']);
        $this->set_word($word['word']);
        $this->set_category($word['category']);
        $this->set_wordAudio($word['word_audio']);
        $this->set_meme($word['meme']);
        $this->set_exampleList([]);
        $this->set_explainFrench($word['explain_fr']);
        $this->set_explainForeign($word['explain_en']);
    }

    function pushExampleList($example){
        array_push($this->exampleList, $example);
    }

    function getVar(){
        $properties = get_object_vars($this);
        $properties['exampleList'] = [];
        foreach($this->exampleList as $example){
            array_push($properties['exampleList'], $example->getVar());
        }
        return $properties;
    }

    function set_id($id) {
        $this->id = $id;
      }
    function get_id() {
        return $this->id;
      }

    function set_word($word) {
        $this->word = $word;
      }
    function get_word() {
        return $this->word;
      }

      function set_category($category) {
        $this->category = $category;
      }
    function get_category() {
        return $this->category;
      }

      function set_wordAudio($wordAudio) {
        $this->wordAudio = $wordAudio;
      }
    function get_wordAudio() {
        return $this->wordAudio;
      }

      function set_meme($meme) {
        $this->meme = $meme;
      }
    function get_meme() {
        return $this->meme;
      }

      function set_explainFrench($explainFrench) {
        $this->explainFrench = $explainFrench;
      }
    function get_explainFrench() {
        return $this->explainFrench;
      }

      function set_explainForeign($explainForeign) {
        $this->explainForeign = $explainForeign;
      }
    function get_explainForeign() {
        return $this->explainForeign;
      }

      function set_exampleList($exampleList) {
        $this->exampleList = $exampleList;
      }
    function get_exampleList() {
        return $this->exampleList;
      }
}
?>