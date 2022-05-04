
const updateErrorMessages = (scope,elements) => {
    elements.map((ele) => {
        scope[ele.name].errorMessage = getErrorMessage(scope,ele);
    });
}

const getErrorMessage = (scope, ele) => {
    if (scope[ele.name].serverErrors.length > 0) {
        return input.serverErrors[0];
    }

    const error = Iodine.is(ele.value, JSON.parse(ele.dataset.rules));

    if (error !== true  && scope[ele.name].blurred) {
        return Iodine.getErrorMessage(error);
    }

    return '';
}

const changeUpdate = (scope, event) => {
    if (!scope[event.target.name]) {
        return false;
    }
    if (event.type === 'input') {
        scope[event.target.name].serverErrors = [];
    }
    if (event.type === 'focusout') {
        scope[event.target.name].blurred = true;
    }
}

const initDomData = (scope, elements) => {
    elements.map((ele) => {
        scope[ele.name] = {
            serverErrors: JSON.parse(ele.dataset.serverErrors),
            blurred: false
        };
    });
}



export {
    updateErrorMessages,
    changeUpdate,
    initDomData
}