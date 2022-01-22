// Until now most errors were propagated through an err variable, sometimes this is not the case.
// Then a mechanism called exceptions is used. You can use throw to raise an exception.

const alwaysErrors = () => {
    throw "Very bad Error";
};

alwaysErrors()
