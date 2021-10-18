import './Button.scss'

function Button({onLoadMore}) {
    return (
        <button type='button' className="Button" onClick={onLoadMore} >Load more</button>    
    )
}

export default Button;