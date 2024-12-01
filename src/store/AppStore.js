import {action, computed, makeAutoObservable, makeObservable, observable, toJS} from "mobx";

class AppStore {
    mixtures = []
    data = []
    diseases = []
    targetDisease = ""
    targetMixture = ""
    weight = 0
    age = 0
    result = 0

    setWeight = it => {this.weight = it}
    setAge = it => {this.age = it}
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
        if(disease != null){
            return disease.mixtures
                .find(it => it.name === this.targetMixture).id
        }
        return null
    }

    constructor() {
        makeAutoObservable(this)
    }
}

export default new AppStore();