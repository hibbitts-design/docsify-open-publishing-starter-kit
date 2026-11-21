// Browser tab titles such as "Module 2 | CPT363-1" in a course, and "Courses | Site Name" elsewhere – hibbittsdesign.org
// Code generated/assisted by Anthropic Claude AI
(function () {
  function joinTitle(first, second) {
    if (first && second && first !== second) {
      return first + ' | ' + second;
    }
    if (first) {
      return first;
    }
    return second;
  }

  function getFolder(path) {
    var parts = path.replace(/^\/+/, '').split('/');
    if (parts.length > 1) {
      return parts[0];
    }
    return '';
  }

  // A course names itself with its navbar's site title link (":class=site-title" in its _navbar.md). The link must
  // point into this page's folder: right after moving between courses, the previous course's navbar can still show.
  function getCourseName(folder, siteName) {
    var link = document.querySelector('.app-nav a.site-title');
    if (!folder || !link) {
      return '';
    }
    var linkPath = (link.getAttribute('href') || '').replace(/^#\//, '');
    var courseName = link.textContent.trim();
    if (getFolder('/' + linkPath) !== folder || courseName === siteName) {
      return '';
    }
    return courseName;
  }

  function pageTitles(hook, vm) {
    hook.doneEach(function () {
      // a name can have a line break in it (such as 'Docsify\nOpen Publishing Starter Kit'), shown as a space here
      var siteName = (vm.config.name || '').replace(/\s+/g, ' ').trim();
      var courseName = getCourseName(getFolder(vm.route.path), siteName);

      var pageHeading = '';
      var heading = document.querySelector('.markdown-section h1');
      if (heading) {
        pageHeading = heading.textContent.trim();
      }

      var title;
      if (courseName && pageHeading !== courseName) {
        title = joinTitle(pageHeading, courseName);
      } else if (courseName) {
        title = joinTitle(courseName, siteName);
      } else {
        title = joinTitle(pageHeading, siteName);
      }
      if (title) {
        document.title = title;
      }
    });
  }

  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [pageTitles].concat(window.$docsify.plugins || []);
})();
