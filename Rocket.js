"use strict"

const FinSet = require("./components/FinSet.js");
const OuterComponent = require('./components/OuterComponent.js');
const ComponentSeries = require("./components/ComponentSeries.js");
const InnerComponent = require("./components/InnerComponent.js");
const BodyTube = require("./components/BodyTube.js");
const InnerTube = require('./components/InnerTube.js');

class Rocket extends ComponentSeries{
    constructor(state)
    {
        `
        angle, aref, dref, v0, p, M
    
        `
        super(state);
        
        this.assignComponents();
    }

    assignComponents() {
        // assigns the finset and motor components
        this.finset = this._conditionalSearch((element) => {
            return element instanceof FinSet;
        })[0]; // only the last finset cuz we're noobs

        this.motors = this._conditionalSearch((element) => {
            return element instanceof Motor;
        }); //yay
    }

    add(subcomponents) {
        `
        subcomponents -> [[location, component], ...]
        `
        // radioactive zone B)
        // radioactive zone B)
        
        subcomponents.map((info, idx) => {
            //what is up, fam?

            let component = info[1];
            let parentComponent = this.search(info[0], returnParent = true)[0];
            
            for (let i = 0; i < parentComponent.state.subcomponents.length; i++) {
                if (parentComponent.state.subcomponents[i].state.name === component.state.name) {
                    throw "bruh this component already exists you absolute dong >:(("
                }
            }
            parentComponent.state.subcomponents.push(component);
            
        })

        this.assignComponents();
    }

    remove(names) {
        // radioactive zone B)

        names.map(name => {
            let parentComponent = this.search(name, returnParent = true)[0];

            for (let i = 0; i < parentComponent.state.subcomponents.length; i++){
                if (parentComponent.state.subcomponents[i].state.name === name) {
                    parentComponent.state.subcomponents.splice(i,1);
                    break;
                }   
            }
        })

        this.assignComponents();
    }

    search(name, returnParent = false) {
        // radioactive zone B)
        // searches the parent component and subcomponents
        if (name === ""){
            return this; 
        }

        let location = name + '.';
        let parentComponent = this;

        while (name.indexOf('.') >= 0){
            let splitLocation = name.indexOf(".");        // . delimit
            let name = name.slice(0, splitLocation);

            for (let i = 0; i < parentComponent.state.subcomponents.length; i++) {
                if (parentComponent.state.subcomponents[i].state.name === name) {
                    parentComponent = parentComponent.state.subcomponents[i];
                }
            }

            name = name.slice(splitLocation + 1); 
        }
        
        for (let i = 0; i < parentComponent.state.subcomponents.length; i++){
            if (parentComponent.state.subcomponents[i].state.name === name) {
                return returnParent ? [parentComponent, parentComponent.state.subcomponents[i]] : parentComponent.state.subcomponents[i]; 
            }   
        }

        throw "bruh this component doesn't exist u dong";
    }

    _conditionalSearch(foundCondition) {
        // fancy feast
        // fancy feast
        // fancy feast

        // it's pretty self explanatory to be honest

        let queue = [];
        let satisfied = [];
        while (queue.length > 0) {
            // pop
            let pop = queue[0];
            if (foundCondition(pop)) {
                satisfied.push(pop);
            }

            queue = queue.slice(1);

            // push
            pop.state.subcomponents.map((subcomponent) => {
                queue.push(subcomponent);
            });
        }

        if (satisfied.length > 0) return satisfied;
        throw "bro u trippin b no element inside the rocket satisfies the found condition";
    }


    setMass(mass) {
        this.mass = mass;
        this.overrideMass = true;
    }

    setCG(cg) {
        this.CG = cg;
        this.overrideCG = true;
    }

    _calcCP() {
        let cpSum = 0;
        let cnSum = 0;
        let length = 0;

        this.state.subcomponents.map((component, idx) => {
            if (component instanceof OuterComponent){
                cpSum += component.Cn * (component.cp + length);
                cnSum += component.Cn;

                length += component.length;
            }
        })

        this.cp = cpSum / cnSum;
        return this.cp;
    }

    _calcSurfaceArea() {
        let area = 0;
        
        this.state.subcomponents.map((component, idx) => {
            if (component instanceof OuterComponent) {
                area += component.surfaceArea;
            }
        })

        this.surfaceArea = area;
        return this.surfaceArea;
    }

    _calcFinenessRatio() {
        let maxDiameter = 0;
        let totalLength = 0;
        this.state.subcomponents.map((component, idx) => {
            if (!component instanceof InnerComponent && !component instanceof FinSet) {
                component.points.map((point, idx) => {
                    if (idx != component.points.length - 1) {
                        if (component.points[idx][0] > maxDiameter) {
                            maxDiameter = component.points[idx][0];
                        }
                        totalLength += component.length;
                    }
                })
            }
        })
        this.length = totalLength;
        this.finenessRatio = totalLength / maxDiameter;
        return this.finenessRatio;
    }

    _calcDrag() {
        let R = this.state.v0 * this.length / (1.48 * 10**-5); // Reynolds number
        let Cfc = (1.50 * Math.log(R) - 5.6)**-2 * (1-0.1 * this.state.M**2); // compressibility-corrected skin friction coefficient
        let skinFrictionDrag = Cfc * ((1 + 1 / 2 / this.finenessRatio) * this.surfaceArea + 
                               (1 + 2 * this.finset.thickness / this.finset.maclength) * this.finset.surfaceArea) / this.state.aref;
        
        let cd = skinFrictionDrag;

        this.state.subcomponents.map((component, idx) => {
            cd += component.cd;
        })

        this.cd = cd;
        return this.cd;

    }

}

/*
    skin friction drag = C_fc * ((1 + 1 / 2 / f_B) * A_body + (1 + 2 * t / c) * A_fins) / A_ref
    body pressure drag
        nose cone pressure drag = 0.8 * sin(phi)**2, phi is angle between vertical and nosecone
        shoulder (transition) pressure drag: same as nose cone
        boattail pressure drag: eq 3.88, pg 49
    fin pressure drag: dependent on rectangular, rounded leading/trailing edges, airfoil 
        Aref = full frontal area
        rounded leading edge presure drag: eq 3.89, pg 49
        rectangular: eq 3.90, pg 50


*/

let bt = new BodyTube({
    radius: 5,
    innerRadius: 4.5, 
    length: 10,
    density: 0.68,
    subcomponents: [],
    name: "bron"
});

let rocket = new Rocket({
    subcomponents: [] 
})

let innertube = new InnerTube({
    radius: 4.5,
    innerRadius: 4,
    position: 0,
    motorMount: false,
    name: "bronticulosis"
})

rocket.add([["", bt]]);
console.log(rocket.state);
rocket.add([["bron", innertube]])

console.log(rocket.state);

rocket.remove(["bron"]);
console.log(rocket.state);

console.log(rocket.state.subcomponents[0].state)