// q3_tasks.js
$(function(){
  const $list = $('#q3-list');
  const $filter = $('#q3-filter');

  function load(query){
    const url = 'http://localhost:3003/tasks' + (query ? '?' + query : '');
    $.ajax({
      url,
      method:'GET',
      success:function(data){
        render(data);
      },
      error:function(){ $list.html('<div>Error loading tasks</div>'); }
    });
  }

  function render(tasks){
    $list.empty();
    tasks.forEach(t=>{
      const $item = $(`
        <div class="task" data-id="${t.id}">
          <div><strong>${t.title}</strong><div>${t.priority} — ${t.completed? 'Done':'Pending'}</div></div>
          <div><label><input type="checkbox" class="q3-complete" ${t.completed? 'checked':''}> Completed</label></div>
        </div>
      `);
      $list.append($item);
    });
  }

  $filter.on('change', function(){
    load(this.value);
  });

  $list.on('change', '.q3-complete', function(){
    const $task = $(this).closest('.task');
    const id = $task.data('id');
    const checked = $(this).is(':checked');
    $.ajax({
      url: 'http://localhost:3003/tasks/' + id,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({ completed: checked }),
      success: function(){ /* UI already reflects change */ },
      error: function(){
        alert('Failed to update task completion');
        $(this).prop('checked', !checked);
      }
    });
  });

  // initial load
  load('');
});
