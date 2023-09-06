<?php
class Dialogdata {
    private $id;
    private $conversationId;
    private $avatar;
    private $audio;
    private $lineFrench;
    private $lineForeign;
    private $linkList=[];


    function pushDialogFull($dialog) {
        $this->set_id($dialog['id']);
        $this->set_conversationId($dialog['conversation_id']);
        $this->set_avatar($dialog['avatar']);
        $this->set_audio($dialog['audio']);
        $this->set_lineFrench($dialog['line_fr']);
        $this->set_lineForeign($dialog['line_foreign']);
    }

    function pushLinkData($link) {
        array_push($this->linkList, $link);
    }

    function getVar() {
        $properties = get_object_vars($this);
        $properties['linkList'] = [];
        foreach($this->linkList as $link){
          array_push($properties['linkList'], $link->getVar());
        }
        return $properties;
    }

    function set_id($id) {
        $this->id = $id;
    }

    function set_conversationId($conversationId) {
        $this->conversationId = $conversationId;
    }

    function set_avatar($avatar) {
        $this->avatar = $avatar;
    }

    function set_audio($audio) {
        $this->audio = $audio;
    }

    function set_lineFrench($lineFrench) {
        $this->lineFrench = $lineFrench;
    }

    function set_lineForeign($lineForeign) {
        $this->lineForeign = $lineForeign;
    }

    function set_linkList($linkList) {
        $this->linkList = $linkList;
    }
}
?>