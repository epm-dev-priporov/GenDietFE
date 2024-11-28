import {action, makeAutoObservable, makeObservable, observable} from "mobx";

class AppStore {
    mixtures = []
    data = []
    diseases = []
    setData = it => {this.data = it}
    setMixtures = it => {this.mixtures = it}
    setDiseases = it => {this.diseases = it}

    constructor() {
        makeObservable(this,{
            mixtures: observable,
            diseases: observable,
            data: observable,
            setMixtures: action,
            setData: action,
            setDiseases: action
        })
        // makeAutoObservable(this)
    }
}

export default new AppStore();