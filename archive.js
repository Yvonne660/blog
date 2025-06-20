function filterArchive(year) {
  const items = document.querySelectorAll('#archiveList li');
  items.forEach(item => {
    const itemYear = item.getAttribute('data-year');
    item.style.display = (year === 'all' || itemYear === year) ? 'list-item' : 'none';
  });
}