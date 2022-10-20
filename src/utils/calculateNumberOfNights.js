function calculateNumberOfNights(one, two) {
    one = new Date(one);
    two = new Date(two);
    let result = two.getTime() - one.getTime();
    let days = result / (1000 * 3600 * 24);
    return days;
}

export default calculateNumberOfNights;