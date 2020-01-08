import * as React from 'react';
import './ForroMoves.css';

function ForroMoves() {
    
    return (
        <div className="responsiveTable">
            <table id="ForroMoves">
                <thead>
                    <tr>
                        <td>English / Portuguese names</td>
                        <td>Level</td>
                        <td>Counting</td>
                        <td>Based on</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Alfreds / Futterkiste</td>
                        <td>Beginner</td>
                        <td>3</td>
                        <td>&nbsp;</td>
                    </tr>
                    <tr>
                        <td>Berglunds / snabbköp</td>
                        <td>Intermediate</td>
                        <td>5</td>
                        <td>Channel</td>
                    </tr>
                    <tr>
                        <td>Centro / Moctezuma</td>
                        <td>Advanced</td>
                        <td>7</td>
                        <td>&nbsp;</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default ForroMoves;