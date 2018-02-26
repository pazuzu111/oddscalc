<div className="app-card">
            <div className="text-container">
                <div className="flip-container">
                    <p className="title">{this.props.ant.name}</p>
                    <div className="flipper">
                        <div className="front">
                            <h4>odds:</h4>
                            <h3>{this.state.odds}%</h3>
                            <h4>status:</h4>
                            <h3>{this.state.status}</h3>
                        </div>
                        <div className="back">
                            <div className="description">
                                <h4> length: {this.props.ant.length}</h4>
                                <h4> weight: {this.props.ant.weight}</h4>
                                <h4> color: {this.props.ant.color}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



<div id="button">
                <button onClick={this.odds}> calculate </button>
            </div>

            {results}
