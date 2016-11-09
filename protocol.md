#Client Protocol

The client protocol is a secondary and independent protocol from the main server
protocol. The client protocol is used to communicate special commands that 
don't need interference from the server between clients. Encoded messages take 
the form:
```
\protocolxxx<message>\xxx
```
where `xxx` is the protocol number.

##Currently Supported Encodings

###/me
User input in the form
```
/me <message>
```
is encoded as
```
\protocol000<message\000
```
and is displayed in the channel in the form
```
*<user> <message>*
```


