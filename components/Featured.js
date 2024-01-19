const Featured = () => {
    return (
        <div className="featured">
            <div className="featured_content center">
                <div className="column">
                    <h1>Pro anywhere</h1>
                    <p>Sed lacinia convallis elementum. Sed ligula lorem, imperdiet vitae varius ac, rutrum ut turpis. Proin aliquet porta elit, vel dapibus dui fringilla eget.
                        Etiam arcu ex, dignissim sit amet massa non, hendrerit tristique ipsum.
                    </p>
                    <div className="buttons">
                    <button className="buttonSecondary">Read more</button>
                    <button className="buttonPrimary">Add to cart</button>
                    </div>
                    
                </div>
                <div className="column">
                    <img src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP858/mbp16-gray.png" />
                </div>

            </div>
        </div>
    )
}

export default Featured;