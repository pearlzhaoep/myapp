<?php
class ConversationData {
    private $id;
    private $title;
    private $cover;
    private $fullAudio;
    private $dialogList=[];

    function pushCoverOnly($cover){
        $this->set_id($cover['id']);
        $this->set_title($cover['title']);
        $this->set_cover($cover['cover']);
    }

    function pushConversationFull($conversation){
        $this->set_id($conversation['id']);
        $this->set_fullAudio($conversation['fullAudio']);
    }

    function pushDialogList($dialog){
        array_push($this->dialogList, $dialog);
    }

    function getVarCoverOnly() {
        $properties = ["id"=>$this->id, "title"=>$this->title, "cover"=>$this->cover];
        return $properties;
    }

    function getVar() {
        $properties = get_object_vars($this);
        $properties['dialogList'] = [];
        foreach($this->dialogList as $dialog){
          array_push($properties['dialogList'], $dialog->getVar());
        }
        return $properties;
    }

    function set_id($id) {
        $this->id = $id;
    }

    function set_title($title) {
        $this->title = $title;
    }
    
    function set_cover($cover) {
        $this->cover = $cover;
    }

    function set_fullAudio($fullAudio) {
        $this->fullAudio = $fullAudio;
    }

    function set_dialogList($dialogList) {
        $this->dialogList = $dialogList;
    }
}
?>