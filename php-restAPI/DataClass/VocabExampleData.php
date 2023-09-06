<?php
class VocabExampleData {
    private $id;
    private $wordId;
    private $exampleFrench;
    private $exampleForeign;

    function __construct($item){
        $this->id = $item['id'];
        $this->wordId = $item['word_id'];
        $this->exampleFrench = $item['example_fr'];
        $this->exampleForeign = $item['example_foreign'];
    }

    function getVar(){
        $properties = get_object_vars($this);
        return $properties;
    }

    function set_id($id) {
        $this->id = $id;
      }
    function get_id() {
        return $this->id;
      }

      function set_wordId($wordId) {
        $this->wordId = $wordId;
      }
    function get_wordId() {
        return $this->wordId;
      }

      function set_exampleFrench($exampleFrench) {
        $this->exampleFrench = $exampleFrench;
      }
    function get_exampleFrench() {
        return $this->exampleFrench;
      }

      function set_exampleForeign($exampleForeign) {
        $this->exampleForeign = $exampleForeign;
      }
    function get_exampleForeign() {
        return $this->exampleForeign;
      }
}
?>