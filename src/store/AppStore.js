import {action, computed, makeAutoObservable, makeObservable, observable, toJS} from "mobx";

class AppStore {
    mixtures = []
    data = []
    diseases = []
    sex = "M"
    targetDisease = ""
    targetMixture = ""
    weight = 0
    birthDay = ""
    result = []

    setSex = it => {this.sex = it}
    setWeight = it => {this.weight = it}
    setBirthDay = it => {this.birthDay = it}
    setData = it => {this.data = it}
    setMixtures = it => {this.mixtures = it}
    setDiseases = it => {this.diseases = it}
    setTargetMixture = it => {
        console.log("targetMixture = ", it)
        this.targetMixture = it
    }
    setTargetDisease = it => {
        console.log("targetDisease = ", it)
        this.targetDisease = it
    }
    setResult = it => {this.result = it}

    get mixtureId(){
        let disease = toJS(this.data)
            .find(it => it.name === this.targetDisease)

        console.log("calc disease = ", disease);
        if(disease != null){
            let id = disease.mixtures
                .find(it => it.name === this.targetMixture).id;
            console.log("calc mixtureId = ", id);
            return id
        }
        return null
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new AppStore();