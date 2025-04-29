import './Header.css'
export default function Header() {
    return (
        <div className="header">
            <div className="preferances">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
    );
}