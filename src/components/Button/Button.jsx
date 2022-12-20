import StyleList from "styles/styles"

const {BtnLoadMoreStyle}= StyleList

const Button = props => {
    return (
        <div>
            <BtnLoadMoreStyle type="button">Load more</BtnLoadMoreStyle>
        </div>
    )
}

export default Button