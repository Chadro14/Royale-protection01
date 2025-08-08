
```python
import sys
import json

banned_users = ["user123", "badguy", "spam_account"]

def check_ban(username):
    return username in banned_users

if _name_ == "_main_":
    user = sys.argv[1] if len(sys.argv) > 1 else ""
    result = {"banned": check_ban(user)}
    print(json.dumps(result))
```

