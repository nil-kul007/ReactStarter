import React from 'react';

const UIGuide = props => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>H1 Bootstrap heading (2.5rem = 40px)</h1>
                <h2>H2 Bootstrap heading (2rem = 32px)</h2>
                <h3>H3 Bootstrap heading (1.75rem = 28px)</h3>
                <h4>H4 Bootstrap heading (1.5rem = 24px)</h4>
                <h5>H5 Bootstrap heading (1.25rem = 20px)</h5>
                <h6>H6 Bootstrap heading (1rem = 16px)</h6>
            </div>
            <hr />
            <div className="col-md-12">
            <h2>Buttons</h2>
            <button type="button" className="btn">Basic</button>
            <button type="button" className="btn btn-default">Default</button>
            <button type="button" className="btn btn-primary">Primary</button>
            <button type="button" className="btn btn-success">Success</button>
            <button type="button" className="btn btn-info">Info</button>
            <button type="button" className="btn btn-warning">Warning</button>
            <button type="button" className="btn btn-danger">Danger</button>
            <button type="button" className="btn btn-link">Link</button>
            <hr />
            <h3>Types of button</h3>
            <a href="#" className="btn btn-info" role="button">Link Button</a>
            <button type="button" className="btn btn-info">Button</button>
            <input type="button" className="btn btn-info" value="Input Button" />
            <input type="submit" className="btn btn-info" value="Submit Button" />
            <hr />
            <button type="button" className="btn btn-primary btn-lg">Large</button>
            <button type="button" className="btn btn-primary btn-md">Medium</button>
            <button type="button" className="btn btn-primary btn-sm">Small</button>
            <button type="button" className="btn btn-primary btn-xs">XSmall</button>
            <hr />
            <button type="button" className="btn btn-primary btn-block">Full width button</button>
            <hr />
            </div>
            <hr />
            <div className="col-md-6">
                <h2>Contextual Colors</h2>
                <p>Use the contextual classes to provide "meaning through colors":</p><hr />
                <p className="text-muted">This text is muted.</p><hr />
                <p className="text-primary">This text is important.</p><hr />
                <p className="text-success">This text indicates success.</p><hr />
                <p className="text-info">This text represents some information.</p><hr />
                <p className="text-warning">This text represents a warning.</p><hr />
                <p className="text-danger">This text represents danger.</p><hr />
            </div>
            <hr />
            <div className="col-md-6">
                <h2>Contextual Link Colors</h2>
                <p>Hover over the links.</p><hr />
                <a href="#" className="text-muted">Muted link.</a><hr />
                <a href="#" className="text-primary">Primary link.</a><hr />
                <a href="#" className="text-success">Success link.</a><hr />
                <a href="#" className="text-info">Info link.</a><hr />
                <a href="#" className="text-warning">Warning link.</a><hr />
                <a href="#" className="text-danger">Danger link.</a><hr />
            </div>
            <hr />
            <div className="col-md-6">
                <h2>Contextual Backgrounds</h2>
                <p className="bg-primary text-white">This text is important.</p><hr />
                <p className="bg-success text-white">This text indicates success.</p><hr />
                <p className="bg-info text-white">This text represents some information.</p><hr />
                <p className="bg-warning text-white">This text represents a warning.</p><hr />
                <p className="bg-danger text-white">This text represents danger.</p><hr />
            </div>
            <div className="col-md-6">
                <h2>Alerts</h2>
                <div className="alert alert-success">
                    <strong>Success!</strong> This alert box could indicate a successful or positive action.
                </div>
                <div className="alert alert-info">
                    <strong>Info!</strong> This alert box could indicate a neutral informative change or action.
                </div>
                <div className="alert alert-warning">
                    <strong>Warning!</strong> This alert box could indicate a warning that might need attention.
                </div>
                <div className="alert alert-danger">
                    <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
                </div>
            </div>
        </div>
    );
};

export default UIGuide;