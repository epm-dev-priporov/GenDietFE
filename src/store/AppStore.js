import {action, makeAutoObservable, makeObservable, observable} from "mobx";

class AppStore {
    mixtures = []
    data = []
    diseases = []
    targetDisease = ""
    targetMixture = ""
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

    constructor() {
        makeObservable(this,{
            mixtures: observable,
            diseases: observable,
            targetDisease: observable,
            targetMixture: observable,
            data: observable,
            setMixtures: action,
            setData: action,
            setDiseases: action,
            setTargetMixture: action,
            setTargetDisease: action
        })
        // makeAutoObservable(this)
    }
}

export default new AppStore();