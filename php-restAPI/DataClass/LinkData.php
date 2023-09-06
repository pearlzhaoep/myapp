<?php
class LinkData {
    private $id;
    private $dialogId;
    private $index;
    private $wordId;

    function __construct($link){
        $this->set_id($link['id']);
        $this->set_dialogId($link['dialog_id']);
        $this->set_index($link['popup_index']);
        $this->set_wordId($link['word_id']);
    }

    function getVar() {
        $properties = get_object_vars($this);
        return $properties;
    }

    function set_id($id) {
        $this->id = $id;
    }

    function set_dialogId($dialogId) {
        $this->dialogId = $dialogId;
    }

    function set_index($index) {
        $this->index = $index;
    }

    function set_wordId($wordId) {
        $this->wordId = $wordId;
    }
}
?>