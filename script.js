const contentArea = document.getElementById('contentArea');
const webButton = document.getElementById('webButton');
    webButton.addEventListener('click', () => {
        contentArea.innerHTML = `
        <h2>🔐WEBログイン</h2>
        <p>WEBサイト用パスワードを作成します。</p>
        <label>文字数</label>
        <input id="lengthInput" type ="number" value="12" min="4" max="64"></input>
        <br><br>
        <button id="generateButton">生成</button><br>
        <div id="resultArea" class="resultBox"></div>
        `;

        const generateButton = document.getElementById('generateButton');
        const resultArea = document.getElementById('resultArea');
            generateButton.addEventListener('click', () => {
                const lengthInput = document.getElementById('lengthInput');
                const length=Number(lengthInput.value) ;
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                let password = '';
                for(let i = 0; i < length; i++) {
                    const randomIndex = 
                    Math.floor(Math.random() * chars.length);
                    password += chars[randomIndex];
                }
                resultArea.textContent = password;
            });
    });

const bankButton = document.getElementById('bankButton');
    bankButton.addEventListener('click', () => {
        contentArea.innerHTML = `
        <h2>💳銀行ツール</h2>
        <p>銀行関連のパスワードを作成します。</p>`;
    });
const cardButton = document.getElementById('cardButton');
    cardButton.addEventListener('click', () => {
        contentArea.innerHTML = `
        <h2>🪪免許・マイナンバー</h2>
        <p>免許・マイナンバー関連のパスワードを作成します。</p>`;
    });

