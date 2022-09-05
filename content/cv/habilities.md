---
type: text
title: habilities
index: 2
---

# Habilities

```python
from flask import jsonify, Flask
from enum import Enum

class Experience(Enum):
    ovh = {
        "lang": ["python", "go", "perl", "typescript", "javascript"],
        "frameworks": ["Flask", "Sql-Alchemy", "AngularJS", "Angular.io", "nest", "nuxt"],
        "tools": ["Git", "Docker", "K8S"],
        "time": 5
    }
    optimix = {
        "lang": ["Java", "Python", "javascript", "Scala", "typescript"],
        "frameworks": ["GWT", "express", "Angular"],
        "tools": ["Git", "express", "Tomcat", "Docker", "proxmox", "Gitlab"],
        "time": 3
    }
    vekia = {
        "lang": ["java", "python", "javascript"],
        "frameworks": ["GWT", "django", "jQuery", "express", "Hibernate"],
        "tools": ["svn", "jenkins", "sonar", "KVM / proxmox", "Jboss"],
        "time": 5
    }

app = Flask(__name__)

@app.route('/', methods=['GET'])
def xp():
    return jsonify({e.name: e.value for e in Experience}), 200

app.run()
```
