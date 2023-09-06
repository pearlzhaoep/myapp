<?php
require_once "Database.php";
require PROJECT_ROOT_PATH . "/DataClass/VocabData.php";
require PROJECT_ROOT_PATH . "/DataClass/VocabExampleData.php";
require PROJECT_ROOT_PATH . "/DataClass/ConversationData.php";
require PROJECT_ROOT_PATH . "/DataClass/DialogData.php";
require PROJECT_ROOT_PATH . "/DataClass/LinkData.php";

class UserModel extends Database {
    public function getWordByCategory($categoryId, $language){
        $queryLanguageType = "explain_" . $language;
        $result = $this->select("SELECT id, word, category, word_audio, meme, explain_fr, $queryLanguageType as explain_foreign FROM vocab WHERE category = :category", ['category' => $categoryId]);
        $vocabList = [];
        $queryLanguageType = "example_" . $language;
        foreach($result as $word){
            $newWord = new VocabData();
            $newWord->pushWordFull($word);
            $exampleResult = $this->select("SELECT id, word_id, example_fr, $queryLanguageType as example_foreign FROM vocab_example WHERE word_id = :id", ['id' => $word['id']]);
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

    public function getAllWordOnly(){
        $result = $this->select("SELECT id, word FROM vocab");
        $vocabList = [];
        foreach($result as $word){
            $newWord = new VocabData();
            $newWord->pushWordOnly($word);
            array_push($vocabList, $newWord);
        }
        $toJSON = [];
        foreach($vocabList as $vocab){
            array_push($toJSON, $vocab->getVarWordOnly());
        }
        $toJSON = json_encode($toJSON);
        return $toJSON;
    }

    public function getWordById($id, $language){
        $queryLanguageType = "explain_" . $language;
        $result = $this->select("SELECT id, word, category, word_audio, meme, explain_fr, $queryLanguageType as explain_foreign FROM vocab WHERE id = :id", ['id' => $id]);
        $newWord = new VocabData();
        $newWord->pushWordFull($result[0]);
        $queryLanguageType = "example_" . $language;
        $exampleResult = $this->select("SELECT id, word_id, example_fr, $queryLanguageType as example_foreign FROM vocab_example WHERE word_id = :id", ['id' => $id]);
        foreach($exampleResult as $example){
                $newWord->pushExampleList(new VocabExampleData($example));
        }
        $toJSON = json_encode($newWord->getVar());
        return $toJSON;
    }

    public function getCoverOnly(){
        $result = $this->select("SELECT id, title, cover FROM conversation");
        $coverList = [];
        foreach($result as $cover){
            $newCover = new ConversationData();
            $newCover->pushCoverOnly($cover);
            array_push($coverList, $newCover);
        }
        $toJSON = [];
        foreach($coverList as $cover){
            array_push($toJSON, $cover->getVarCoverOnly());
        }
        $toJSON = json_encode($toJSON);
        return $toJSON;
    }

    public function getConversationById($id, $language){
        $result = $this->select("SELECT id, fullAudio FROM conversation WHERE id = :id", ['id' => $id]);
        $newConversation = new ConversationData();
        $newConversation->pushConversationFull($result[0]);
        $queryLanguageType = "line_" . $language;
        $dialogResult = $this->select("SELECT id, conversation_id, avatar, audio, line_fr, $queryLanguageType as line_foreign FROM conversation_dialog WHERE conversation_id = :id", ['id' => $id]);
        foreach($dialogResult as $dialog){
            $newDialog = new DialogData();
            $newDialog->pushDialogFull($dialog);
            $linkResult = $this->select("SELECT id, dialog_id, popup_index, word_id FROM conversation_link WHERE dialog_id = :id", ['id' => $dialog['id']]);
            foreach($linkResult as $link){
                $newLink = new LinkData($link);
                $newDialog->pushLinkData($newLink);
            }
            $newConversation->pushDialogList($newDialog);
        }
        $toJSON = json_encode($newConversation->getVar());
        return $toJSON;
    }
}
?>