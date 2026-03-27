document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('titleInput').value;
    const content = document.getElementById('contentInput').value;
    
    if (!title || !content) return;
    
    const postsContainer = document.getElementById('postsContainer');
    const emptyMessage = postsContainer.querySelector('.empty-message');
    if (emptyMessage) {
        emptyMessage.remove();
    }
    
    const now = new Date();
    const timeString = now.toLocaleString('zh-TW');
    
    const postDiv = document.createElement('div');
    postDiv.className = 'post-item';
    postDiv.innerHTML = `
        <div class="post-header">
            <h3>${escapeHtml(title)}</h3>
            <button class="delete-btn" onclick="deletePost(this)">刪除</button>
        </div>
        <p>${escapeHtml(content)}</p>
        <div class="time">${timeString}</div>
    `;
    
    postsContainer.insertBefore(postDiv, postsContainer.firstChild);
    
    document.getElementById('titleInput').value = '';
    document.getElementById('contentInput').value = '';
});

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function deletePost(btn) {
    const postItem = btn.closest('.post-item');
    postItem.remove();
    
    const postsContainer = document.getElementById('postsContainer');
    if (postsContainer.children.length === 0) {
        postsContainer.innerHTML = '<p class="empty-message">尚無文章</p>';
    }
}