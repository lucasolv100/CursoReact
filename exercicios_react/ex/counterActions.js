export function Inc(){
    return {
        type: 'INC'
    }
}

export function Dec(){
    return {
        type: 'DEC'
    }
}

export function StepChanged(e){
    return {
        type: 'STEP_CHANGED',
        payload: e.target.value
    }
}