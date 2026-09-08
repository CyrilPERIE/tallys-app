function format_duration(duration: number) {
}

function format_quantity(quantity: number) : string {
    if (quantity >= 1000000) {
        return `${(quantity / 1000000).toFixed(1)}M`;
    }
    if (quantity >= 1000) {
        const isK = quantity < 10000;
        const unit = "K"
        return `${(quantity / 1000).toFixed(isK ? 1 : 0)}${isK ? "":unit}`.replace(".", unit);
    }
    return quantity < 10 ? quantity.toFixed(1) : quantity.toFixed(0);
}

function format_date(date: Date) {
}

export { format_duration, format_quantity, format_date };